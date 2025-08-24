import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, NavController, IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonBadge, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonButtons, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonSkeletonText, IonList, IonCard } from '@ionic/angular/standalone';
import { Program, ProgramFilter } from 'src/app/core/models/program';
import { ProgramService } from 'src/app/core/services/program';
import { ProgramCardComponent } from 'src/app/components/program-card/program-card.component';
import { FilterModalComponent } from 'src/app/components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-program-search',
  templateUrl: './program-search.page.html',
  styleUrls: ['./program-search.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProgramCardComponent,
    NgFor,
    NgIf,
    FormsModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgramSearchPage implements OnInit {
  query: string = '';
  filters: ProgramFilter = {}
  isFilterOpen: boolean = false;
  activeFilters: string[] = ['Design', 'Programming', 'Development', 'Design', 'Programming']

  loading = true;
  programs: Program[] = [];
  displayed: Program[] = [];

  constructor(
    private program: ProgramService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
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

  async openFilterModal() {
    (document.activeElement as HTMLElement)?.blur();

    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data) {
      this.program.filterPrograms(this.query, data).subscribe(list => {
      this.displayed = list;
    });
    }
  }

  removeFilter(filter: string) {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
  }

  clearFilters() {
    this.filters = {};
    this.applyFilters();
  }
}
