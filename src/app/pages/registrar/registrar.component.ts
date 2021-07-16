import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from 'src/app/@shared/services/authentication.service';
import { NavbarService } from 'src/app/@shared/services/navbar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  correo :string =''
  password :string =''
  isLogued:number =0;
  constructor(private router: Router,
              private authenticationService:AuthenticationService,
              private navBarService: NavbarService) { }

  ngOnInit(): void {
  }

  login(){

    this.authenticationService.login(this.correo,this.password)
    .subscribe(data => {
      if(data.nombre == 1 ){
        this.isLogued =1
      }else if(data.apellido!=null){
        this.isLogued=2;
        this.navBarService.emitDisplay(true);
        this.router.navigate(['modulos']);
      }
    })
  }

}


