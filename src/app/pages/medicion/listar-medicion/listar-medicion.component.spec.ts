import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicionComponent } from './listar-medicion.component';

describe('ListarMedicionComponent', () => {
  let component: ListarMedicionComponent;
  let fixture: ComponentFixture<ListarMedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
