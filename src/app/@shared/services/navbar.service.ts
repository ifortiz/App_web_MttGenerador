import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  private emitEventButtons = new Subject<boolean>();
  eventEmitted$ = this.emitEventButtons.asObservable();
  emitDisplay(data: boolean) { this.emitEventButtons.next(data)}
}
