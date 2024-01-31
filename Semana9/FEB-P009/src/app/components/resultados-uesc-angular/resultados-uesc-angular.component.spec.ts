import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosUescAngularComponent } from './resultados-uesc-angular.component';

describe('ResultadosUescAngularComponent', () => {
  let component: ResultadosUescAngularComponent;
  let fixture: ComponentFixture<ResultadosUescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadosUescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadosUescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
