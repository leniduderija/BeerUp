import { TestBed, inject } from '@angular/core/testing';

import { PunkapiService } from './punkapi.service';

describe('PunkapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunkapiService]
    });
  });

  it('should be created', inject([PunkapiService], (service: PunkapiService) => {
    expect(service).toBeTruthy();
  }));
});
