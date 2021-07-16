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
  selector: 'app-list-idcod',
  templateUrl: './list-idcod.component.html',
  styleUrls: ['./list-idcod.component.css']
})
export class ListIdcodComponent implements OnInit {

  id!: number;
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

    /* this.Listar(); */

    this.equipoService.getEquipos().subscribe(data=>{
      console.log('data ',data)
      this.equipos=data;
    }) 
  }

  equipoId: number = 0;
  listaNoDuplicados: number[] = [];
  Consultar() {

      this.service.getActividadbyequipo(this.equipoId).subscribe((data:any) => {
       data.forEach((element:Actividad) => {
        let ot = element.equipogeneral.reporte.id_ot;
        if(!this.listaNoDuplicados.includes(ot)){
          this.listaNoDuplicados.push(ot);
          this.actividades.push(element);
          console.log('data ', data);
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
   this.Consultar(); 
 }

 viewActividad(ot: number){
  this.router.navigate(['view-reporte', ot]);
}
Salir(){
  this.router.navigate(["reportes"]);
}
}
