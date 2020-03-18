import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguiendoPage } from './siguiendo.page';

describe('SiguiendoPage', () => {
  let component: SiguiendoPage;
  let fixture: ComponentFixture<SiguiendoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiguiendoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiguiendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
