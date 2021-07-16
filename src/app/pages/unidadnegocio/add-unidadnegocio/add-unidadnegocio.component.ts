import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Unidadnegocio } from 'src/app/@shared/modals/Unidadnegocio';
import { UnidadnegocioService } from 'src/app/@shared/services/unidadnegocio.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';

@Component({
  selector: 'app-add-unidadnegocio',
  templateUrl: './add-unidadnegocio.component.html',
  styleUrls: ['./add-unidadnegocio.component.css']
})
export class AddUnidadnegocioComponent implements OnInit {

  unidadnegocio: Unidadnegocio = new Unidadnegocio();
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: UnidadnegocioService,
               private router: Router, 
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 
 
      }
 
  
  ngOnInit(): void {
 
    this.newUnidadnegocio();
  }
 
  newUnidadnegocio(): void {
    this.submitted = false;
      this.unidadnegocio = new Unidadnegocio();
 
  }
 
  Guardar() {
      this.service.createUnidadnegocio(this.unidadnegocio)
    .subscribe((data:any) => {
      console.log('data ', data);
      this.unidadnegocio = new Unidadnegocio();
      this.modal.open(this.nameModal);
      
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-unidadnegocio"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }
 
