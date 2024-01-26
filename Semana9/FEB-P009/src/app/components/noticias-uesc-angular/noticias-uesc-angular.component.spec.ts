import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasUescAngularComponent } from './noticias-uesc-angular.component';

describe('NoticiasUescAngularComponent', () => {
  let component: NoticiasUescAngularComponent;
  let fixture: ComponentFixture<NoticiasUescAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasUescAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasUescAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
