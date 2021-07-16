import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Usuario } from 'src/app/@shared/modals/Usuario';
import { UsuarioService } from 'src/app/@shared/services/usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  usuario!: Usuario;
  nameModal: string = 'actualizarC';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService, 
    private modal: ModalComponent) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getUsuario(this.id).subscribe((data:Usuario) => {
        console.log(data)
        this.usuario = data;
    }, (error:any) => console.log(error));
  }

 updateUsuario() {
    this.service.updateUsuario(this.id, this.usuario)
      .subscribe((data:any) => {
        console.log(data);
        this.usuario = new Usuario();
        this.modal.open(this.nameModal);
      },(error:any) => {console.log(error)
      });
  }

  onSubmit() {
    this.updateUsuario();    
  }

  gotoList() {
    this.router.navigate(['list-usuario']);
  }

}