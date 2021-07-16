import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCentralComponent } from './edit-central.component';

describe('EditCentralComponent', () => {
  let component: EditCentralComponent;
  let fixture: ComponentFixture<EditCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
