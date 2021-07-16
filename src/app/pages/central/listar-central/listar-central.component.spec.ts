import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCentralComponent } from './listar-central.component';

describe('ListarCentralComponent', () => {
  let component: ListarCentralComponent;
  let fixture: ComponentFixture<ListarCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
