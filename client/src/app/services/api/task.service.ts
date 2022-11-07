import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feature, Task } from '../../models/listModels';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get(environment.api + 'tasks') as Observable<Task[]>;
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get(environment.api + 'features') as Observable<Feature[]>;
  }

  postFeature(feature: Feature): Observable<Feature> {
    return this.http.post(
      environment.api + 'features',
      feature
    ) as Observable<Feature>;
  }

  putFeature(feature: Feature): Observable<Feature> {
    return this.http.put(
      environment.api + 'features/' + feature.id,
      feature
    ) as Observable<Feature>;
  }

  deleteFeature(featureId: number) {
    return this.http.delete(environment.api + 'features/' + featureId);
  }
}
