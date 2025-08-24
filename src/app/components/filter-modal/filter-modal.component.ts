import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  imports: [
    FormsModule,
    NgFor,
    IonicModule,
    RouterModule
]
})
export class FilterModalComponent  implements OnInit {
  tuitionRange = { lower: 50000, upper: 120000 };

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

  clearAll() {
    this.tuitionRange = { lower: 50000, upper: 120000 };
    this.filters.forEach(f => f.value = 'None selected');
  }

  goBack() {
  this.navCtrl.back(); // goes back in history
}
}
