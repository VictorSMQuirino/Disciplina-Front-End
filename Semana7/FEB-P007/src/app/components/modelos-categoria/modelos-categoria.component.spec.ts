import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosCategoriaComponent } from './modelos-categoria.component';

describe('ModelosCategoriaComponent', () => {
  let component: ModelosCategoriaComponent;
  let fixture: ComponentFixture<ModelosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelosCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
