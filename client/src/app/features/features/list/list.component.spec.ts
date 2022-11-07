import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from 'src/app/services/task.service';

import { FeatureListComponent } from './list.component';

describe('ListComponent', () => {
  let component: FeatureListComponent;
  let fixture: ComponentFixture<FeatureListComponent>;
  let httpClientSpy: { get: jasmine.Spy };
  let taskServiceSpy: { getFeatures: jasmine.Spy; getPromise: jasmine.Spy };

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    taskServiceSpy = jasmine.createSpyObj('TaskService', [
      'getFeatures',
      'getPromise',
    ]);
    await TestBed.configureTestingModule({
      declarations: [FeatureListComponent],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: TaskService, useValue: taskServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
