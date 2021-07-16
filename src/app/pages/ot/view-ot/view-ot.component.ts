import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Actividad } from 'src/app/@shared/modals/Actividad';
import { Equipo } from 'src/app/@shared/modals/Equipo';
import { Equipogeneral } from 'src/app/@shared/modals/Equipogeneral';
import { Reporte } from 'src/app/@shared/modals/Reporte';
import { ActividadService } from 'src/app/@shared/services/actividad.service';
import { EquipogeneralService } from 'src/app/@shared/services/equipogeneral.service';

@Component({
  selector: 'app-view-ot',
  templateUrl: './view-ot.component.html',
  styleUrls: ['./view-ot.component.css']
})
export class ViewOtComponent implements OnInit {

  ot!: number;
  actividades: Actividad[] = [];
  fechaActividad: string = '';
  equipo:Equipo = new Equipo();
  equipogeneral:Equipogeneral = new Equipogeneral();
  reportes:Reporte[] = [];
  submitted = false;
  filterTerm: string;

   constructor(   private route: ActivatedRoute,
                  private router: Router,
                  private equipogeneralService: EquipogeneralService,
                  private service: ActividadService) { 

                  this.filterTerm =""

                }
  
    ngOnInit(){

      this.ot = this.route.snapshot.params['ot'];

      console.log('ot = ', this.ot)

      this.service.getActividadByOt(this.ot).subscribe((data:Actividad[]) => {
          console.log('Actividad = ',data)
          this.actividades = data;
          this.equipo = this.actividades[0].equipo;
          this.equipogeneral = this.actividades[0].equipogeneral;
          this.fechaActividad = this.actividades[0].fcreacion;
      })
    }


      Salir(){
        this.router.navigate(["list-ot"]);
     }

      onSubmit() {
        this.submitted = true;
        this.Salir(); 
      }
  }
