import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredorTabsPage } from './corredor-tabs.page';

describe('CorredorTabsPage', () => {
  let component: CorredorTabsPage;
  let fixture: ComponentFixture<CorredorTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredorTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredorTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
