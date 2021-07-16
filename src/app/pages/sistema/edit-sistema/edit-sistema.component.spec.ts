import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSistemaComponent } from './edit-sistema.component';

describe('EditSistemaComponent', () => {
  let component: EditSistemaComponent;
  let fixture: ComponentFixture<EditSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
