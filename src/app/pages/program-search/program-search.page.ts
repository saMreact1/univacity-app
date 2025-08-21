import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonBadge, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonButtons, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonSkeletonText, IonList, IonCard } from '@ionic/angular/standalone';
import { Program, ProgramFilter } from 'src/app/core/models/program';
import { ProgramService } from 'src/app/core/services/program';
import { ProgramCardComponent } from 'src/app/components/program-card/program-card.component';

@Component({
  selector: 'app-program-search',
  templateUrl: './program-search.page.html',
  styleUrls: ['./program-search.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonSkeletonText, 
    IonRefresherContent,
    IonRefresher,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProgramCardComponent,
    IonIcon,
    NgFor,
    NgIf,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgramSearchPage implements OnInit {
  query: string = '';
  filters: ProgramFilter = {}
  isFilterOpen: boolean = false;
  activeFilters: string[] = ['Design', 'Programming', 'Development']

  loading = true;
  programs: Program[] = [];
  displayed: Program[] = [];

  constructor(
    private program: ProgramService
  ) { }

  ngOnInit() {
    this.load();
  }

  load(event?: any) {
    this.loading = true;
    this.program.getAll().subscribe(list => {
      this.programs = list;
      this.applyFilters();
      this.loading = false;
      event?.target?.complete?.();
    })
  }

  applyFilters() {
    this.program.filterPrograms(this.query, this.filters).subscribe(list => {
      this.displayed = list;
    })
  }

  removeFilter(filter: string) {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
  }

  clearFilters() {
    this.filters = {};
    this.applyFilters();
  }

}
