import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Unidad } from 'src/app/@shared/modals/Unidad';
import { UnidadService } from 'src/app/@shared/services/unidad.service';
import { CentralService } from 'src/app/@shared/services/central.service';
import { Central } from '../../../@shared/modals/Central';

@Component({
  selector: 'app-edit-unidad',
  templateUrl: './edit-unidad.component.html',
  styleUrls: ['./edit-unidad.component.css']
})
export class EditUnidadComponent implements OnInit {

  id!: number;
  unidad: Unidad = new Unidad();
  centrales:Central[] = [];
  submitted = false;
  nameModal: string = 'actualizarUnidad';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private centralService: CentralService,
    private service: UnidadService, 
    private modal: ModalComponent) { }

  ngOnInit() {

    this.unidad = new Unidad();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getUnidad(this.id).subscribe((data:Unidad) => {
        console.log(data)
        this.unidad = data;
        this.centralId = this.unidad.central.id;

    }, (error:any) => console.log(error));

    
    this.centralService.getCentrales().subscribe(data=>{
      console.log('data ',data)
      this.centrales=data;
    })
  }

  centralId: number = 0;
  Guardar() {
    console.log('this.unidad = ', this.unidad);

      let list = this.centrales.filter(sis=>{return sis.id == this.centralId});
      this.unidad.central = list[0];
      this.service.updateUnidad(this.id,this.unidad).subscribe((data:any) => {
      console.log('data ', data);
      this.unidad = new Unidad();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createUnidad() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.unidad));
    })
 
  }

  responseModal(event: string){
    console.log(event)
    this.router.navigate(["list-unidad"]);
 }


 onSubmit() {
   this.submitted = true;
   this.Guardar(); 

 }
}
