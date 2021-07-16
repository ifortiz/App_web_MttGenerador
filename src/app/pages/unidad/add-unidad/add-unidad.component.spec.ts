import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnidadComponent } from './add-unidad.component';

describe('AddUnidadComponent', () => {
  let component: AddUnidadComponent;
  let fixture: ComponentFixture<AddUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
