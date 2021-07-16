import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnidadComponent } from './list-unidad.component';

describe('ListUnidadComponent', () => {
  let component: ListUnidadComponent;
  let fixture: ComponentFixture<ListUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
