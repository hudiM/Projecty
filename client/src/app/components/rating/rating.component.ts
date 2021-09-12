import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeRating(rating: number) {
    if (this.rating === rating) {
      this.rating = 0;
    } else {
      this.rating = rating;
    }
    this.ratingChange.emit(rating);
  }
}
