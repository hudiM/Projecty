import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feature, Status } from 'src/app/models/listModels';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FeatureComponent implements OnInit {
  @Input() feature!: Feature;
  @Input() statuses: Status[] = [];

  @Output() saved: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  featureClone?: Feature;

  constructor() {}

  ngOnInit(): void {
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
  }

  save() {
    this.feature.status = this.statuses.find(
      (s) => s.id === this.feature.status.id
    )!;
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
    this.saved.emit(true);
    this.feature.editMode = false;
  }

  cancel() {
    this.feature = this.featureClone!;
    this.featureClone = JSON.parse(JSON.stringify(this.feature));
    this.feature.editMode = false;
  }
}
