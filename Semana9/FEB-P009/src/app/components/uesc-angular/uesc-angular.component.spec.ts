import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UescAngularComponent } from './uesc-angular.component';

describe('UescAngularComponent', () => {
  let component: UescAngularComponent;
  let fixture: ComponentFixture<UescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
