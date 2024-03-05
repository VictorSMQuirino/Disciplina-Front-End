import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetAssistanceComponent } from './edit-pet-assistance.component';

describe('EditPetAssistanceComponent', () => {
  let component: EditPetAssistanceComponent;
  let fixture: ComponentFixture<EditPetAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPetAssistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPetAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
