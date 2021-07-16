import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdcodComponent } from './list-idcod.component';

describe('ListIdcodComponent', () => {
  let component: ListIdcodComponent;
  let fixture: ComponentFixture<ListIdcodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIdcodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdcodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
