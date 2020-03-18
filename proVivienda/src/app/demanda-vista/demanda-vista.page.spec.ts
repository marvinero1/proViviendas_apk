import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaVistaPage } from './demanda-vista.page';

describe('DemandaVistaPage', () => {
  let component: DemandaVistaPage;
  let fixture: ComponentFixture<DemandaVistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandaVistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandaVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
