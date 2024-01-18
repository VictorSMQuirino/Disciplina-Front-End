import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeInformacoesComponent } from './exibe-informacoes.component';

describe('ExibeInformacoesComponent', () => {
  let component: ExibeInformacoesComponent;
  let fixture: ComponentFixture<ExibeInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeInformacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibeInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
