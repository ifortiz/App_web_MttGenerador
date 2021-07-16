import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Sistema } from 'src/app/@shared/modals/Sistema';
import { SistemaService } from 'src/app/@shared/services/sistema.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';

@Component({
  selector: 'app-add-sistema',
  templateUrl: './add-sistema.component.html',
  styleUrls: ['./add-sistema.component.css']
})
export class AddSistemaComponent implements OnInit {

  sistema: Sistema = new Sistema();
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: SistemaService,
               private router: Router, 
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 
 
      }
 
  
  ngOnInit(): void {
 
    this.newSistema();
  }
 
  newSistema(): void {
    this.submitted = false;
      this.sistema = new Sistema();
 
  }
 
  Guardar() {
      this.service.createSistema(this.sistema)
    .subscribe((data:any) => {
      console.log('data ', data);
      this.sistema = new Sistema();
      this.modal.open(this.nameModal);
      
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-sistema"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }
 