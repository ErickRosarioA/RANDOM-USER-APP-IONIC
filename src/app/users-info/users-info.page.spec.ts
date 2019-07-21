import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInfoPage } from './users-info.page';

describe('UsersInfoPage', () => {
  let component: UsersInfoPage;
  let fixture: ComponentFixture<UsersInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
