import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSistemaComponent } from './add-sistema.component';

describe('AddSistemaComponent', () => {
  let component: AddSistemaComponent;
  let fixture: ComponentFixture<AddSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
