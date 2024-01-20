import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasModeloComponent } from './caracteristicas-modelo.component';

describe('CaracteristicasModeloComponent', () => {
  let component: CaracteristicasModeloComponent;
  let fixture: ComponentFixture<CaracteristicasModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaracteristicasModeloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaracteristicasModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
