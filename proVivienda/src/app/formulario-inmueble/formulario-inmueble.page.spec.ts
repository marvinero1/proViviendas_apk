import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInmueblePage } from './formulario-inmueble.page';

describe('FormularioInmueblePage', () => {
  let component: FormularioInmueblePage;
  let fixture: ComponentFixture<FormularioInmueblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInmueblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInmueblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
