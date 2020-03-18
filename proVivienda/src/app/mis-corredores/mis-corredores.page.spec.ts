import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCorredoresPage } from './mis-corredores.page';

describe('MisCorredoresPage', () => {
  let component: MisCorredoresPage;
  let fixture: ComponentFixture<MisCorredoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCorredoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCorredoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
