import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesCorredorPage } from './publicaciones-corredor.page';

describe('PublicacionesCorredorPage', () => {
  let component: PublicacionesCorredorPage;
  let fixture: ComponentFixture<PublicacionesCorredorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesCorredorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesCorredorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
