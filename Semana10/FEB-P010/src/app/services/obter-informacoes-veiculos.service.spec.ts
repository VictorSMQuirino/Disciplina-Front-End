import { TestBed } from '@angular/core/testing';

import { ObterInformacoesVeiculosService } from './obter-informacoes-veiculos.service';

describe('ObterInformacoesVeiculosService', () => {
  let service: ObterInformacoesVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObterInformacoesVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
