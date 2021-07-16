import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sistema } from 'src/app/@shared/modals/Sistema';
import { SistemaService } from 'src/app/@shared/services/sistema.service';
import { ModalComponent } from 'src/app/@core/components/modal/modal.component';

@Component({
  selector: 'app-edit-sistema',
  templateUrl: './edit-sistema.component.html',
  styleUrls: ['./edit-sistema.component.css']
})
export class EditSistemaComponent implements OnInit {

  id!: number;
  sistema!: Sistema;
  nameModal: string = 'actualizarC';
  numModal: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SistemaService, 
    private modal: ModalComponent) { }

  ngOnInit() {
    this.sistema = new Sistema();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getSistema(this.id).subscribe((data:Sistema) => {
        console.log(data)
        this.sistema = data;
    }, (error:any) => console.log(error));
  }

 updateSistema() {
    this.service.updateSistema(this.id, this.sistema)
      .subscribe((data:any) => {
        console.log(data);
        this.sistema = new Sistema();
        this.modal.open(this.nameModal);
      },(error:any) => {console.log(error)
      });
  }

  onSubmit() {
    this.updateSistema();    
  }

  gotoList() {
    this.router.navigate(['list-sistema']);
  }

}

