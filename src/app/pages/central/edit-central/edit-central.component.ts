import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';
import { Central } from 'src/app/@shared/modals/Central';
import { CentralService } from 'src/app/@shared/services/central.service';
import { UnidadnegocioService } from 'src/app/@shared/services/unidadnegocio.service';
import { Unidadnegocio } from '../../../@shared/modals/Unidadnegocio';

@Component({
  selector: 'app-edit-central',
  templateUrl: './edit-central.component.html',
  styleUrls: ['./edit-central.component.css']
})
export class EditCentralComponent implements OnInit {

  id!: number;
  central: Central = new Central();
  unidadnegocios:Unidadnegocio[] = [];
  submitted = false;
  nameModal: string = 'actualizarCentral';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadnegocioService: UnidadnegocioService,
    private service: CentralService, 
    private modal: ModalComponent) { }

  ngOnInit() {

    this.central = new Central();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getCentral(this.id).subscribe((data:Central) => {
        console.log(data)
        this.central = data;
        this.unidadnegocioId = this.central.unidadnegocio.id;

    }, (error:any) => console.log(error));

    
    this.unidadnegocioService.getUnidadnegocios().subscribe(data=>{
      console.log('data ',data)
      this.unidadnegocios=data;
    })
  }

  unidadnegocioId: number = 0;
  Guardar() {
    console.log('this.central = ', this.central);

      let list = this.unidadnegocios.filter(sis=>{return sis.id == this.unidadnegocioId});
      this.central.unidadnegocio = list[0];
      this.service.updateCentral(this.id,this.central).subscribe((data:any) => {
      console.log('data ', data);
      this.central = new Central();
      this.modal.open(this.nameModal);
    },err=>{
      console.log('ERROR SERVICIO createCentral() error= ', JSON.stringify(err) + ' - request='+JSON.stringify(this.central));
    })
 
  }

  responseModal(event: string){
    console.log(event)
    this.router.navigate(["list-central"]);
 }


 onSubmit() {
   this.submitted = true;
   this.Guardar(); 

 }
}
