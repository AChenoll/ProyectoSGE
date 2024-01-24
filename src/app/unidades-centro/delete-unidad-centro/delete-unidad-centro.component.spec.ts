import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUnidadCentroComponent } from './delete-unidad-centro.component';

describe('DeleteUnidadCentroComponent', () => {
  let component: DeleteUnidadCentroComponent;
  let fixture: ComponentFixture<DeleteUnidadCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUnidadCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUnidadCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
