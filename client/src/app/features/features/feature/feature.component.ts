import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feature, Status } from 'src/app/models/listModels';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  @Input() feature!: Feature;
  @Input() statuses: Status[] = [];

  @Output() saved: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  featureClone?: Feature;
  editMode: boolean = false;

  ngOnInit(): void {
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
  }

  save() {
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
    this.saved.emit(true);
    this.editMode = !this.editMode;
  }

  cancel() {
    this.feature = this.featureClone!;
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
    this.editMode = !this.editMode;
  }
}
