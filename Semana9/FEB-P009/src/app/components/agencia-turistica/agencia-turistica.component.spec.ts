import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaTuristicaComponent } from './agencia-turistica.component';

describe('AgenciaTuristicaComponent', () => {
  let component: AgenciaTuristicaComponent;
  let fixture: ComponentFixture<AgenciaTuristicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgenciaTuristicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenciaTuristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
