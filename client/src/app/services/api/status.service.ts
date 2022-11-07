import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/listModels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  getStatuses(): Observable<Status[]> {
    return this.http.get(environment.api + 'status') as Observable<Status[]>;
  }
}
