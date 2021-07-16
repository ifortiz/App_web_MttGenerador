import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Unidadnegocio } from 'src/app/@shared/modals/Unidadnegocio';
import { UnidadnegocioService } from 'src/app/@shared/services/unidadnegocio.service';

@Component({
  selector: 'app-listar-unidadnegocio',
  templateUrl: './listar-unidadnegocio.component.html',
  styleUrls: ['./listar-unidadnegocio.component.css']
})
export class ListarUnidadnegocioComponent implements OnInit {

  unidadnegocios:Unidadnegocio[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:UnidadnegocioService, 
                private router:Router, 
                private modal: ModalComponent) { 

                  this.filterTerm ="";

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getUnidadnegocios().subscribe((data:any)=>{
        this.unidadnegocios = data;
        this.router.navigate(["list-unidadnegocio"])
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-unidadnegocio"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteUnidadnegocio();
      }
    }

    idUnidadnegocio: number = 0;

    openModal(id: number){
      this.idUnidadnegocio = 0;
      this.modal.open(this.nameModal);
      this.idUnidadnegocio = id;
    }

    deleteUnidadnegocio() {
      this.service.deleteUnidadnegocio(this.idUnidadnegocio).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        this.modal.close(this.nameModal);
        console.log(error)
      });
    }
    
    updateUnidadnegocio(id: number){
      this.router.navigate(['edit-unidadnegocio', id]);
    }
  }
