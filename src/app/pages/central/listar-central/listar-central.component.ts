import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Central } from 'src/app/@shared/modals/Central';
import { CentralService } from 'src/app/@shared/services/central.service';

@Component({
  selector: 'app-listar-central',
  templateUrl: './listar-central.component.html',
  styleUrls: ['./listar-central.component.css']
})
export class ListarCentralComponent implements OnInit {

  centrals:Central[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:CentralService, 
                private router:Router, 
                private modal: ModalComponent) { 


                  this.filterTerm ="";

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getCentrales().subscribe((data:any)=>{
        this.centrals = data;
        console.log('data = ',data)
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-central"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteCentral();
      }
    }

    idCentral: number = 0;

    openModal(id: number){
      this.idCentral = 0;
      this.modal.open(this.nameModal);
      this.idCentral = id;
    }

    deleteCentral() {
      this.service.deleteCentral(this.idCentral).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        this.modal.close(this.nameModal);
        console.log(error)
      });
    }
    
    updateCentral(id: number){
      this.router.navigate(['edit-central', id]);
    }
  }
