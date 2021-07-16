import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unidadnegocio } from 'src/app/@shared/modals/Unidadnegocio';
import { UnidadnegocioService } from 'src/app/@shared/services/unidadnegocio.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';

@Component({
  selector: 'app-edit-unidadnegocio',
  templateUrl: './edit-unidadnegocio.component.html',
  styleUrls: ['./edit-unidadnegocio.component.css']
})
export class EditUnidadnegocioComponent implements OnInit {

  id!: number;
  unidadnegocio!: Unidadnegocio;
  nameModal: string = 'actualizarC';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UnidadnegocioService, 
    private modal: ModalComponent) { }

  ngOnInit() {
    this.unidadnegocio = new Unidadnegocio();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getUnidadnegocio(this.id).subscribe((data:Unidadnegocio) => {
        console.log(data)
        this.unidadnegocio = data;
    }, (error:any) => console.log(error));
  }

 updateUnidadnegocio() {
    this.service.updateUnidadnegocio(this.id, this.unidadnegocio)
      .subscribe((data:any) => {
        console.log(data);
        this.unidadnegocio = new Unidadnegocio();
        this.modal.open(this.nameModal);
      },(error:any) => {console.log(error)
      });
  }

  onSubmit() {
    this.updateUnidadnegocio();    
  }

  gotoList() {
    this.router.navigate(['list-unidadnegocio']);
  }

}
