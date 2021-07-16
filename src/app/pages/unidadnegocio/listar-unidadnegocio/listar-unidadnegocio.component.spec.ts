import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadnegocioComponent } from './listar-unidadnegocio.component';

describe('ListarUnidaddenegocioComponent', () => {
  let component: ListarUnidadnegocioComponent;
  let fixture: ComponentFixture<ListarUnidadnegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnidadnegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnidadnegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
