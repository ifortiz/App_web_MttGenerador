import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() name: string = '';
  @Input() numModal: number = 0;
  @Output() eventEmit = new EventEmitter();


  constructor(public modal: NgxSmartModalService) { }

  ngOnInit(): void {
  }

  open(name: string){
    this.modal.getModal(name).open();
  }

  close(name: string){
    this.modal.close(name);
  }

}
