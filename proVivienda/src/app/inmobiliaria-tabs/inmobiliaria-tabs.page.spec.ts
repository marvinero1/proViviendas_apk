import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaTabsPage } from './inmobiliaria-tabs.page';

describe('InmobiliariaTabsPage', () => {
  let component: InmobiliariaTabsPage;
  let fixture: ComponentFixture<InmobiliariaTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmobiliariaTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmobiliariaTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
