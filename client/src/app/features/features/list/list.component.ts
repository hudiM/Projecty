import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Feature, Status } from 'src/app/models/listModels';
import { StatusService } from 'src/app/services/api/status.service';
import { TaskService } from 'src/app/services/api/task.service';

@Component({
  selector: 'feature-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  features: BehaviorSubject<Feature[]>;
  test: string = '';
  statuses: Status[] = [];

  constructor(
    private statusService: StatusService,
    private taskService: TaskService,
    private toastr: ToastrService
  ) {
    this.features = new BehaviorSubject([] as Feature[]);
    this.taskService.getFeatures().subscribe((features) => {
      this.features.next(features);
    });
  }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses() {
    this.statusService.getStatuses().subscribe((response) => {
      this.statuses = response;
    });
  }

  addFeature() {
    this.features.next([
      ...this.features.value,
      {
        title: '',
        tasks: [],
        tags: [],
        status: this.statuses[0],
        rating: 0,
        isNew: true,
      },
    ]);
  }

  save(feature: Feature) {
    if (feature.isNew) {
      this.taskService.postFeature(feature).subscribe((response) => {
        feature.id = response.id;
        feature.isNew = false;
        this.toastr.success('Saved');
      });
    } else {
      this.taskService.putFeature(feature).subscribe((response) => {
        this.toastr.success('Saved');
      });
    }
  }

  remove(feature: Feature) {
    if (feature.id !== undefined) {
      this.taskService.deleteFeature(feature.id).subscribe((response) => {
        this.features.next(
          this.features.value.filter((item) => item !== feature)
        );
        this.toastr.success('Done');
      });
    } else {
      this.features.next(
        this.features.value.filter((item) => item !== feature)
      );
      this.toastr.success('Done');
    }
  }
}
