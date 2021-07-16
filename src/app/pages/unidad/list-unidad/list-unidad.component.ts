import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Unidad } from 'src/app/@shared/modals/Unidad';
import { UnidadService } from 'src/app/@shared/services/unidad.service';

@Component({
  selector: 'app-list-unidad',
  templateUrl: './list-unidad.component.html',
  styleUrls: ['./list-unidad.component.css']
})
export class ListUnidadComponent implements OnInit {

  unidades:Unidad[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:UnidadService, 
                private router:Router, 
                private modal: ModalComponent) { 

                  this.filterTerm ="";

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getUnidades().subscribe((data:any)=>{
        this.unidades = data;
        console.log('data = ',data)
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-unidad"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteUnidad();
      }
    }

    idUnidad: number = 0;

    openModal(id: number){
      this.idUnidad = 0;
      this.modal.open(this.nameModal);
      this.idUnidad = id;
    }

    deleteUnidad() {
      this.service.deleteUnidad(this.idUnidad).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        this.modal.close(this.nameModal);
        console.log(error)
      });
    }
    
    updateUnidad(id: number){
      this.router.navigate(['edit-unidad', id]);
    }
  }

