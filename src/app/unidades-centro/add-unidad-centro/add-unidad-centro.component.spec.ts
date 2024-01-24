import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnidadCentroComponent } from './add-unidad-centro.component';

describe('AddUnidadCentroComponent', () => {
  let component: AddUnidadCentroComponent;
  let fixture: ComponentFixture<AddUnidadCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnidadCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnidadCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
