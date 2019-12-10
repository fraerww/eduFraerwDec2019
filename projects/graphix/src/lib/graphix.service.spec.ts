import { TestBed } from '@angular/core/testing';

import { GraphixService } from './graphix.service';

describe('GraphixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphixService = TestBed.get(GraphixService);
    expect(service).toBeTruthy();
  });
});
