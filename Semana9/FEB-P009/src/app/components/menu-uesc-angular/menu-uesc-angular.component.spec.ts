import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUescAngularComponent } from './menu-uesc-angular.component';

describe('MenuUescAngularComponent', () => {
  let component: MenuUescAngularComponent;
  let fixture: ComponentFixture<MenuUescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuUescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuUescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
