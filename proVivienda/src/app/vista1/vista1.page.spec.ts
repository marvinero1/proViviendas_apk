import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista1Page } from './vista1.page';

describe('Vista1Page', () => {
  let component: Vista1Page;
  let fixture: ComponentFixture<Vista1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
