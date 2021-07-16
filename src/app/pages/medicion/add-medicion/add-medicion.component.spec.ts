import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicionComponent } from './add-medicion.component';

describe('AddMedicionComponent', () => {
  let component: AddMedicionComponent;
  let fixture: ComponentFixture<AddMedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
