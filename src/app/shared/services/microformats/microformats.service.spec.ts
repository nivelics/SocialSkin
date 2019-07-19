import { TestBed } from '@angular/core/testing';

import { MicroformatsService } from './microformats.service';

describe('MicroformatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroformatsService = TestBed.get(MicroformatsService);
    expect(service).toBeTruthy();
  });
});
