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
  isLoading: boolean = true;

  constructor(
    private statusService: StatusService,
    private taskService: TaskService,
    private toastr: ToastrService
  ) {
    this.features = new BehaviorSubject([] as Feature[]);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getStatuses();
  }

  getFeatures() {
    this.taskService.getFeatures().subscribe((features: Feature[]) => {
      this.features.next(features);
      this.isLoading = false;
    });
  }

  getStatuses() {
    this.statusService.getStatuses().subscribe((statuses: Status[]) => {
      this.statuses = statuses;
      this.getFeatures();
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
        editMode: true,
      },
    ]);
  }

  save(feature: Feature) {
    feature.statusId = feature.status.id;
    if (feature.isNew) {
      console.log(feature);

      this.taskService.postFeature(feature).subscribe(
        (response) => {
          feature.id = response.id;
          feature.isNew = false;
          this.toastr.success('Saved');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Failed');
        }
      );
    } else {
      this.taskService.putFeature(feature).subscribe(
        (response) => {
          this.toastr.success('Saved');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Failed');
        }
      );
    }
  }

  remove(feature: Feature) {
    if (feature.id !== undefined) {
      this.taskService.deleteFeature(feature.id).subscribe(
        (response) => {
          this.features.next(
            this.features.value.filter((item) => item !== feature)
          );
          this.toastr.success('Done');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Failed');
        }
      );
    } else {
      this.features.next(
        this.features.value.filter((item) => item !== feature)
      );
      this.toastr.success('Done');
    }
  }
}
