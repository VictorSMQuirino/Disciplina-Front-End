import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAssistanceListComponent } from './pet-assistance-list.component';

describe('PetAssistanceListComponent', () => {
  let component: PetAssistanceListComponent;
  let fixture: ComponentFixture<PetAssistanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetAssistanceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetAssistanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
