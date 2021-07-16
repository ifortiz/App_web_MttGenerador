import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Medicion } from 'src/app/@shared/modals/Medicion';
import { MedicionService } from 'src/app/@shared/services/medicion.service';

@Component({
  selector: 'app-listar-medicion',
  templateUrl: './listar-medicion.component.html',
  styleUrls: ['./listar-medicion.component.css']
})
export class ListarMedicionComponent implements OnInit {

  medicion:Medicion[] = [];
  filterTerm: string;
  //medicions!: Observable<Medicion[]>
    constructor(private service:MedicionService, 
                private router:Router) { 

                  this.filterTerm ="";

                }
  
    ngOnInit(){
      //this.reloadData();
      this.service.getMediciones()
      .subscribe(data=>{
        console.log('data ', data)
        this.medicion=data;
      })
    }
   // reloadData() {
     // this.medicions = this.service.getMedicions();
    //}
    Listar(){
      this.router.navigate(["listar-medicion"])};
  
    Nuevo(){
        this.router.navigate(["add-medicion"])};
        
  
    deleteMedicion(id: number) {
          this.service.deleteMedicion(id)
            .subscribe(
              data => {
                console.log(data);
                //this.reloadData();
              }
              ,
              error => console.log(error));
        }
    updateMedicion(id: number){
      this.router.navigate(['editmedicion', id]);
    }
  }

