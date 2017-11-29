import { TestBed, inject } from '@angular/core/testing';

import { ExoWorkService } from './exo-work.service';

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
