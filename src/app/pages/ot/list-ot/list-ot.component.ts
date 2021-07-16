import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Actividad } from 'src/app/@shared/modals/Actividad';
import { Equipo } from 'src/app/@shared/modals/Equipo';
import { Equipogeneral } from 'src/app/@shared/modals/Equipogeneral';
import { Reporte } from 'src/app/@shared/modals/Reporte';
import { ActividadService } from 'src/app/@shared/services/actividad.service';
import { EquipoService } from 'src/app/@shared/services/equipo.service';
import { EquipogeneralService } from 'src/app/@shared/services/equipogeneral.service';
import { Sistema } from '../../../@shared/modals/Sistema';
import { SistemaService } from '../../../@shared/services/sistema.service';
import { ReportesComponent } from '../../reportes/reportes.component';

@Component({
  selector: 'app-list-ot',
  templateUrl: './list-ot.component.html',
  styleUrls: ['./list-ot.component.css']
})
export class ListOtComponent implements OnInit {

  ot!: number;
  actividad: Actividad = new Actividad();
  actividades:Actividad[] = [];
  equipos:Equipo[] = [];
  equipogenerales:Equipogeneral[] = [];
  reportes:Reporte[] = [];
  submitted = false;
  nameModal: string = 'actualizarEquipo';
  numModal: number = 3;
  filterTerm: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquipoService,
    private equipogeneralService: EquipogeneralService,
    private service: ActividadService, 
    private modal: ModalComponent) { 

      this.filterTerm =""

    }

  ngOnInit() {
    this.Listar();
  }

  equipoId: number = 0;
  listaNoDuplicados: number[] = [];
  Listar() {

    this.service.getActividades().subscribe((data:any) => {
      console.log('data ', data);
      //this.actividades=data;
       data.forEach((element:Actividad) => {
        let ot = element.equipogeneral.reporte.id_ot;
        if(!this.listaNoDuplicados.includes(ot)){
          this.listaNoDuplicados.push(ot);
          this.actividades.push(element);
          
        }
        
      });

    })
  }
  
  responseModal(event: string){
    console.log(event)
    this.router.navigate(["list-equipo"]);
 }


 onSubmit() {
   this.submitted = true;
   this.Listar(); 

 }
 viewActividad(ot: number){
  this.router.navigate(['view-actividad', ot]);
}
Salir(){
  this.router.navigate(["reportes"]);
}
}
