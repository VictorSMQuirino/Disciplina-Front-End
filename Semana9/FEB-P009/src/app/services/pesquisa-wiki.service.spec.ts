import { TestBed } from '@angular/core/testing';

import { PesquisaWikiService } from './pesquisa-wiki.service';

describe('PesquisaWikiService', () => {
  let service: PesquisaWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
