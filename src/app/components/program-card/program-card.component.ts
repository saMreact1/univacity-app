import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/core/models/program';
import { IonCard, IonItem, IonLabel, IonCardContent, IonBadge } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
  imports: [
    IonBadge, 
    IonCardContent, 
    // IonLabel,
    // IonItem, 
    IonCard,
    RouterModule,
    // NgIf,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgramCardComponent  implements OnInit {
  @Input() program?: Program;

  constructor() { }

  ngOnInit() {}

}
