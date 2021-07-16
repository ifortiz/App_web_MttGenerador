import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Central } from 'src/app/@shared/modals/Central';
import { CentralService } from 'src/app/@shared/services/central.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Unidadnegocio } from 'src/app/@shared/modals/Unidadnegocio';
import { UnidadnegocioService } from 'src/app/@shared/services/unidadnegocio.service';

@Component({
  selector: 'app-add-central',
  templateUrl: './add-central.component.html',
  styleUrls: ['./add-central.component.css']
})
export class AddCentralComponent implements OnInit {

  central: Central = new Central();
  unidadnegocios:Unidadnegocio[] = [];
  submitted = false;
  nameModal: string = 'tester';
  numModal: number = 1;
 
 
  constructor(private service: CentralService,
               private router: Router, 
               private unidadnegocioService: UnidadnegocioService,
               private fb: FormBuilder, 
               private modal: ModalComponent,
    ) { 

      }
 
  
  ngOnInit(): void {
    this.newCentral();
    this.unidadnegocioService.getUnidadnegocios().subscribe(data=>{
      console.log('data ', data)
      this.unidadnegocios=data;
    })
  }
 
  newCentral(): void {
    this.submitted = false;
      this.central = new Central();
 
  }

  unidadnegocioId: number = 0;
  Guardar() {
    console.log('this.central = ', this.central);

    let list = this.unidadnegocios.filter(sis=>{return sis.id == this.unidadnegocioId});
    
    console.log('this.list = ', this.central);
    
    console.log('this.central = ', this.central);

      this.central.unidadnegocio = list[0];
      this.service.createCentral(this.central).subscribe((data:any) => {
      console.log('data ', data);
      this.central = new Central();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createCentral() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.central));
    })
 
  }
 
  responseModal(event: string){
     console.log(event)
     this.router.navigate(["list-central"]);
  }
 
 
  onSubmit() {
    this.submitted = true;
    this.Guardar(); 
 
  }
 }

