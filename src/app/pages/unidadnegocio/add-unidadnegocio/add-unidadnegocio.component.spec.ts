import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnidadnegocioComponent } from './add-unidadnegocio.component';

describe('AddUnidaddenegocioComponent', () => {
  let component: AddUnidadnegocioComponent;
  let fixture: ComponentFixture<AddUnidadnegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnidadnegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnidadnegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
