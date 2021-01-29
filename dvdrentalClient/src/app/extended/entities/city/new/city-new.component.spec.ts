import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TestingModule, EntryComponents } from 'src/testing/utils';
import { CityExtendedService, CityNewExtendedComponent } from '../';
import { ICity } from 'src/app/entities/city';
import { NewComponent, FieldsComp } from 'src/app/common/general-components';

describe('CityNewExtendedComponent', () => {
  let component: CityNewExtendedComponent;
  let fixture: ComponentFixture<CityNewExtendedComponent>;

  let el: HTMLElement;

  describe('Unit tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CityNewExtendedComponent, NewComponent, FieldsComp],
        imports: [TestingModule],
        providers: [CityExtendedService, { provide: MAT_DIALOG_DATA, useValue: {} }],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CityNewExtendedComponent);
      component = fixture.componentInstance;
      spyOn(component, 'manageScreenResizing').and.returnValue();
      fixture.detectChanges();
    });
  });

  describe('Integration tests', () => {
    describe('', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [CityNewExtendedComponent, NewComponent, FieldsComp].concat(EntryComponents),
          imports: [TestingModule],
          providers: [CityExtendedService, { provide: MAT_DIALOG_DATA, useValue: {} }],
        });
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(CityNewExtendedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    });
  });
});
