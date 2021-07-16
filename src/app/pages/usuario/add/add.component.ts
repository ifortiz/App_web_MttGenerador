import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Usuario } from 'src/app/@shared/modals/Usuario';
import { UsuarioService } from 'src/app/@shared/services/usuario.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: UsuarioService,
               private router: Router, 
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 
 
      }
 
  
  ngOnInit(): void {
 
    this.newUsuario();
  }
 
  newUsuario(): void {
    this.submitted = false;
      this.usuario = new Usuario();
 
  }
 
  Guardar() {
      this.service.createUsuario(this.usuario)
    .subscribe((data:any) => {
      console.log('data ', data);
      this.usuario = new Usuario();
      this.modal.open(this.nameModal);
      
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-usuario"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }
