import { TestBed } from '@angular/core/testing';

import { NomePopulacaoService } from './nome-populacao.service';

describe('NomePopulacaoService', () => {
  let service: NomePopulacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomePopulacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
