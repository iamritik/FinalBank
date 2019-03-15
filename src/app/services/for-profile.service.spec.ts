import { TestBed } from '@angular/core/testing';

import { ForProfileService } from './for-profile.service';

describe('ForProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForProfileService = TestBed.get(ForProfileService);
    expect(service).toBeTruthy();
  });
});
