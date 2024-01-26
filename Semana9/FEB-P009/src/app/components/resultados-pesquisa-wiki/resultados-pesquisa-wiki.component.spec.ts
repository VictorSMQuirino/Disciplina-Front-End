import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPesquisaWikiComponent } from './resultados-pesquisa-wiki.component';

describe('ResultadosPesquisaWikiComponent', () => {
  let component: ResultadosPesquisaWikiComponent;
  let fixture: ComponentFixture<ResultadosPesquisaWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadosPesquisaWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadosPesquisaWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
