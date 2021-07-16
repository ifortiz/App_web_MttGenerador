import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Medicion } from 'src/app/@shared/modals/Medicion';
import { MedicionService } from 'src/app/@shared/services/medicion.service';

@Component({
  selector: 'app-add-medicion',
  templateUrl: './add-medicion.component.html',
  styleUrls: ['./add-medicion.component.css']
})
export class AddMedicionComponent implements OnInit {

//forma?: FormGroup;
medicion: Medicion = new Medicion();
submitted = false;

constructor(private service: MedicionService,
  private router: Router, private fb: FormBuilder, 
  ) { 

   // this.crearFormulario
  }


ngOnInit(): void {

  this.newMedicion();
}

newMedicion(): void {
  this.submitted = false;
    this.medicion = new Medicion();
  //this.medicion = new Medicion();
}

Guardar() {
  //let medicion = new Medicion();
  //medicion.nombre = '';
  //medicion.apellido = '';
  //medicion.correo = '';
  this.service.createMedicion(this.medicion)
  .subscribe(data => {
    console.log('data ', data)
    this.medicion = new Medicion();
    alert("Se agregó con exito");
    this.router.navigate(["list-medicion"]);
  })

}
onSubmit() {
  this.submitted = true;
  this.Guardar(); 
  //console.log(this.forma.value);   
}
}

