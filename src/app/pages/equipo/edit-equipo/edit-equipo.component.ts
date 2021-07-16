import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Equipo } from 'src/app/@shared/modals/Equipo';
import { EquipoService } from 'src/app/@shared/services/equipo.service';
import { Sistema } from '../../../@shared/modals/Sistema';
import { SistemaService } from '../../../@shared/services/sistema.service';

@Component({
  selector: 'app-edit-equipo',
  templateUrl: './edit-equipo.component.html',
  styleUrls: ['./edit-equipo.component.css']
})
export class EditEquipoComponent implements OnInit {

  id!: number;
  equipo: Equipo = new Equipo();
  sistemas:Sistema[] = [];
  submitted = false;
  nameModal: string = 'actualizarEquipo';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sistemaService: SistemaService,
    private service: EquipoService, 
    private modal: ModalComponent) { }

  ngOnInit() {

    this.equipo = new Equipo();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getEquipo(this.id).subscribe((data:Equipo) => {
        console.log(data)
        this.equipo = data;
        this.sistemaId = this.equipo.sistema.id;

    }, (error:any) => console.log(error));

    
    this.sistemaService.getSistemas().subscribe(data=>{
      console.log('data ',data)
      this.sistemas=data;
    })
  }

  sistemaId: number = 0;
  Guardar() {
    console.log('this.equipo = ', this.equipo);

      let list = this.sistemas.filter(sis=>{return sis.id == this.sistemaId});
      this.equipo.sistema = list[0];
      this.service.updateEquipo(this.id,this.equipo).subscribe((data:any) => {
      console.log('data ', data);
      this.equipo = new Equipo();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createEquipo() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.equipo));
    })
 
  }

  responseModal(event: string){
    console.log(event)
    this.router.navigate(["list-equipo"]);
 }


 onSubmit() {
   this.submitted = true;
   this.Guardar(); 

 }
}

