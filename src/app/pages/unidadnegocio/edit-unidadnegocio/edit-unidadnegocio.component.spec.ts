import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnidadnegocioComponent } from './edit-unidadnegocio.component';

describe('EditUnidaddenegocioComponent', () => {
  let component: EditUnidadnegocioComponent;
  let fixture: ComponentFixture<EditUnidadnegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnidadnegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnidadnegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
