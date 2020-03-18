import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadosPage } from './destacados.page';

describe('DestacadosPage', () => {
  let component: DestacadosPage;
  let fixture: ComponentFixture<DestacadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestacadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
