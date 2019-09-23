import { TestBed } from '@angular/core/testing';

import { QueryEventService } from './query-event.service';

describe('QueryEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryEventService = TestBed.get(QueryEventService);
    expect(service).toBeTruthy();
  });
});
