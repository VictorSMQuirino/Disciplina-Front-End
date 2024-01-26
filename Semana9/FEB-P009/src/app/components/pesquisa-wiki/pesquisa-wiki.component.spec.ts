import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaWikiComponent } from './pesquisa-wiki.component';

describe('PesquisaWikiComponent', () => {
  let component: PesquisaWikiComponent;
  let fixture: ComponentFixture<PesquisaWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisaWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
