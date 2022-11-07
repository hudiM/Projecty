import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    httpClientSpy.get.and.returnValue([]);
    expect(service).toBeTruthy();
  });
});
