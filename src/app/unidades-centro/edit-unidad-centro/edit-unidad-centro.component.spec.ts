import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnidadCentroComponent } from './edit-unidad-centro.component';

describe('EditUnidadCentroComponent', () => {
  let component: EditUnidadCentroComponent;
  let fixture: ComponentFixture<EditUnidadCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnidadCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnidadCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
