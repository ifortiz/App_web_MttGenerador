import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Equipo } from 'src/app/@shared/modals/Equipo';
import { EquipoService } from 'src/app/@shared/services/equipo.service';
@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {

  equipos:Equipo[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:EquipoService, 
                private router:Router, 
                private modal: ModalComponent) { 

                  this.filterTerm =""

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getEquipos().subscribe((data:any)=>{
        this.equipos = data;
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-equipo"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteEquipo();
      }
    }

    idEquipo: number = 0;

    openModal(id: number){
      this.idEquipo = 0;
      this.modal.open(this.nameModal);
      this.idEquipo = id;
    }

    deleteEquipo() {
      this.service.deleteEquipo(this.idEquipo).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        console.log(error)
      });
    }
    
    updateEquipo(id: number){
      this.router.navigate(['edit-equipo', id]);
    }
  }


