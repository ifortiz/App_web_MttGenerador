import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Unidad } from 'src/app/@shared/modals/Unidad';
import { UnidadService } from 'src/app/@shared/services/unidad.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Central } from 'src/app/@shared/modals/Central';
import { CentralService } from 'src/app/@shared/services/central.service';


@Component({
  selector: 'app-add-unidad',
  templateUrl: './add-unidad.component.html',
  styleUrls: ['./add-unidad.component.css']
})
export class AddUnidadComponent implements OnInit {

  unidad: Unidad = new Unidad();
  centrales:Central[] = [];
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: UnidadService,
               private router: Router, 
               private centralService: CentralService,
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 

      }
 
  
  ngOnInit(): void {
    this.newUnidad();
    this.centralService.getCentrales().subscribe(data=>{
      console.log('data ', data)
      this.centrales=data;
    })
  }
 
  newUnidad(): void {
    this.submitted = false;
      this.unidad = new Unidad();
 
  }

  centralId: number = 0;
  Guardar() {
    console.log('this.unidad = ', this.unidad);

    let list = this.centrales.filter(sis=>{return sis.id == this.centralId});
    
    console.log('this.list = ', this.unidad);
    
    console.log('this.unidad = ', this.unidad);

      this.unidad.central = list[0];
      this.service.createUnidad(this.unidad).subscribe((data:any) => {
      console.log('data ', data);
      this.unidad = new Unidad();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createUnidad() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.unidad));
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-unidad"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }


