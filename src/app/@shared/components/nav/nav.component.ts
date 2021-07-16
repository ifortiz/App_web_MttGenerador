import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { NavbarService } from '../../services/navbar.service';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isEnabled: boolean;

  private eventEmitted: Subscription;

  constructor(private authenticationService: AuthenticationService,
              private navbarService: NavbarService) {

    this.isEnabled = false;
    this.eventEmitted = this.navbarService.eventEmitted$.subscribe(
      data=>{
        this.isEnabled = data;
    });
  }

  ngOnInit(): void {
  }
  
  salir(){
    this.navbarService.emitDisplay(false);
    this.authenticationService.logout();
  }
}
