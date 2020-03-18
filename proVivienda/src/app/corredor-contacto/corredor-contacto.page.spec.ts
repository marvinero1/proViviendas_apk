import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredorContactoPage } from './corredor-contacto.page';

describe('CorredorContactoPage', () => {
  let component: CorredorContactoPage;
  let fixture: ComponentFixture<CorredorContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredorContactoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredorContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
