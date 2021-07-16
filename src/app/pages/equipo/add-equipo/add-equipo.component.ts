import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Equipo, Equipo2 } from 'src/app/@shared/modals/Equipo';
import { Sistema } from 'src/app/@shared/modals/Sistema';
import { EquipoService } from 'src/app/@shared/services/equipo.service';
import { SistemaService } from 'src/app/@shared/services/sistema.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';


@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {

  equipo: Equipo = new Equipo();
  sistemas:Sistema[] = [];
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: EquipoService,
               private router: Router, 
               private sistemaService: SistemaService,
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 

      }
 
  
  ngOnInit(): void {
    this.newEquipo();
    this.sistemaService.getSistemas().subscribe(data=>{
      console.log('data ', data)
      this.sistemas=data;
    })
  }
 
  newEquipo(): void {
    this.submitted = false;
      this.equipo = new Equipo();
 
  }

  sistemaId: number = 0;
  Guardar() {
    console.log('this.equipo = ', this.equipo);

      let list = this.sistemas.filter(sis=>{return sis.id == this.sistemaId});
      this.equipo.sistema = list[0];
      this.service.createEquipo(this.equipo).subscribe((data:any) => {
      console.log('data ', data);
      this.equipo = new Equipo();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createEquipo() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.equipo));
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-equipo"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }