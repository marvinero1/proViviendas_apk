import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaPage } from './demanda.page';

describe('DemandaPage', () => {
  let component: DemandaPage;
  let fixture: ComponentFixture<DemandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
