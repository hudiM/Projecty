import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() style: any;
  @Input() shape: 'circle' | 'rectangle' = 'rectangle';
  @Input() size?: string;
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() borderRadius?: string;

  containerStyle() {
    if (this.size)
      return {
        ...this.style,
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius,
      };
    else
      return {
        ...this.style,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
      };
  }
}
