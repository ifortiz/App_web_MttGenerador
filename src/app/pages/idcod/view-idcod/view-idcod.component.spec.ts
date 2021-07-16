import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdcodComponent } from './view-idcod.component';

describe('ViewIdcodComponent', () => {
  let component: ViewIdcodComponent;
  let fixture: ComponentFixture<ViewIdcodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdcodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIdcodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
