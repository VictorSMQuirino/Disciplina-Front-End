import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosUescAngularComponent } from './servicos-uesc-angular.component';

describe('ServicosUescAngularComponent', () => {
  let component: ServicosUescAngularComponent;
  let fixture: ComponentFixture<ServicosUescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicosUescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosUescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
