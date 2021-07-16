import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCentralComponent } from './add-central.component';

describe('AddCentralComponent', () => {
  let component: AddCentralComponent;
  let fixture: ComponentFixture<AddCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
