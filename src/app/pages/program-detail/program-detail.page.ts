import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton, IonCardTitle, IonCardSubtitle, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonSkeletonText, IonFooter } from '@ionic/angular/standalone';
import { Program } from 'src/app/core/models/program';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProgramService } from 'src/app/core/services/program';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.page.html',
  styleUrls: ['./program-detail.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule,
    IonButton,
  ],
})
export class ProgramDetailPage implements OnInit {
  program?: Program;
  showFullDescription: boolean = false;
  showFullRequirement: boolean = false;
  showFullStructure: boolean = false;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.programService.getProgramById(id).subscribe(p => {
        this.program = p;
      })
    }
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
  toggleRequirement() {
    this.showFullRequirement = !this.showFullRequirement;
  }

  toggleStructure() {
    this.showFullStructure = !this.showFullStructure;
  }
}
