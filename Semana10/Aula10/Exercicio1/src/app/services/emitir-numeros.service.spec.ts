import { TestBed } from '@angular/core/testing';

import { EmitirNumerosService } from './emitir-numeros.service';

describe('EmitirNumerosService', () => {
  let service: EmitirNumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitirNumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
