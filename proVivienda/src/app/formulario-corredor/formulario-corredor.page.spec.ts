import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorredorPage } from './formulario-corredor.page';

describe('FormularioCorredorPage', () => {
  let component: FormularioCorredorPage;
  let fixture: ComponentFixture<FormularioCorredorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCorredorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCorredorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
