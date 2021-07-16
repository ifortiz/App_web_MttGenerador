import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Sistema } from 'src/app/@shared/modals/Sistema';
import { SistemaService } from 'src/app/@shared/services/sistema.service';
@Component({
  selector: 'app-listar-sistema',
  templateUrl: './listar-sistema.component.html',
  styleUrls: ['./listar-sistema.component.css']
})
export class ListarSistemaComponent implements OnInit {

  sistemas:Sistema[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:SistemaService, 
                private router:Router, 
                private modal: ModalComponent) { 

                  this.filterTerm ="";

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getSistemas().subscribe((data:any)=>{
        this.sistemas = data;
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-sistema"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteSistema();
      }
    }

    idSistema: number = 0;

    openModal(id: number){
      this.idSistema = 0;
      this.modal.open(this.nameModal);
      this.idSistema = id;
    }

    deleteSistema() {
      this.service.deleteSistema(this.idSistema).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        this.modal.close(this.nameModal);
        console.log(error)
      });
    }
    
    updateSistema(id: number){
      this.router.navigate(['edit-sistema', id]);
    }
  }
