import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../@shared/services/perfil.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
  public isAdmin :string ='' ;
  constructor(private perfilService:PerfilService) { }

  ngOnInit(): void {

   this.isAdmin= this.perfilService.getUsuario()
  }

}
