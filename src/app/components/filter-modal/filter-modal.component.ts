import { DecimalPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [
    FormsModule,
    NgFor,
    IonicModule,
    RouterModule,
]
})
export class FilterModalComponent  implements OnInit {
  tuitionRange = { lower: 50000, upper: 120000 };

  lowerPercent = 0;
  upperPercent = 100;

  filters = [
    { label: 'Institutes', value: 'None selected' },
    { label: 'Education Level', value: 'None selected' },
    { label: 'Country', value: 'United States, United Kingdom' },
    { label: 'Discipline', value: 'Law, Mathematics' },
    { label: 'Study Language', value: 'None selected' },
    { label: 'Attendance', value: 'None selected' },
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  updatePositions(event: any) {
  const range = event.detail.value;
  const min = 50000;
  const max = 120000;

  this.lowerPercent = ((range.lower - min) / (max - min)) * 100;
  this.upperPercent = ((range.upper - min) / (max - min)) * 100;
}

  clearAll() {
    this.tuitionRange = { lower: 50000, upper: 120000 };
    this.filters.forEach(f => f.value = 'None selected');
  }

  // goBack() {
  //   this.navCtrl.back(); // goes back in history
  // }
}
