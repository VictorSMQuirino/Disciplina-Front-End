import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueUescAngularComponent } from './destaque-uesc-angular.component';

describe('DestaqueUescAngularComponent', () => {
  let component: DestaqueUescAngularComponent;
  let fixture: ComponentFixture<DestaqueUescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestaqueUescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestaqueUescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
