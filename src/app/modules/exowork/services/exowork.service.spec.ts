import { TestBed, inject } from '@angular/core/testing';

import { ExoWorkService } from './exowork.service';

describe('ExoWorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExoWorkService]
    });
  });

  it('should be created', inject([ExoWorkService], (service: ExoWorkService) => {
    expect(service).toBeTruthy();
  }));
});
