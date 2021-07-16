import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicionComponent } from './edit-medicion.component';

describe('EditMedicionComponent', () => {
  let component: EditMedicionComponent;
  let fixture: ComponentFixture<EditMedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
