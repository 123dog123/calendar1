import { TestBed } from '@angular/core/testing';

import { AddEventService } from './addevent.service';

describe('AddeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEventService = TestBed.get(AddEventService);
    expect(service).toBeTruthy();
  });
});
