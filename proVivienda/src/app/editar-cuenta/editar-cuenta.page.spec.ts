import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuentaPage } from './editar-cuenta.page';

describe('EditarCuentaPage', () => {
  let component: EditarCuentaPage;
  let fixture: ComponentFixture<EditarCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCuentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
