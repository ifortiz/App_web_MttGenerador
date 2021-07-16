import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Usuario } from 'src/app/@shared/modals/Usuario';
import { UsuarioService } from 'src/app/@shared/services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[] = [];
  nameModal: string = 'eliminarC';
  numModal: number = 2;
  filterTerm: string;

   constructor(private service:UsuarioService, 
                private router:Router, 
                private modal: ModalComponent) { 

                  this.filterTerm ="";

                }
  
    ngOnInit(){

      this.Listar();
    }
 
    Listar(){
      this.service.getUsuarios().subscribe((data:any)=>{
        this.usuarios = data;
      })
    }
  
    Nuevo(){
        this.router.navigate(["add-usuario"])
    };
        
    responseModal(event: string){
      if(event == 'ELIMINAR'){
        this.deleteUsuario();
      }
    }

    idUsuario: number = 0;

    openModal(id: number){
      this.idUsuario = 0;
      this.modal.open(this.nameModal);
      this.idUsuario = id;
    }

    deleteUsuario() {
      this.service.deleteUsuario(this.idUsuario).subscribe((data:any) => {
        console.log(data);
        this.modal.close(this.nameModal);
        this.Listar();
      },
      (error:any) => {
        this.modal.close(this.nameModal);
        console.log(error)
      });
    }
    
    updateUsuario(id: number){
      this.router.navigate(['edit-usuario', id]);
    }
  }
