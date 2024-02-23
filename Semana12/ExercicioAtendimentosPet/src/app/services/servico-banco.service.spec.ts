import { TestBed } from '@angular/core/testing';

import { ServicoBancoService } from './servico-banco.service';

describe('ServicoBancoService', () => {
  let service: ServicoBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
