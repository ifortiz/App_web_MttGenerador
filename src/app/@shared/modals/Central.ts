import { Unidadnegocio } from "./Unidadnegocio";

export class Central{
    id:number;
    nombre:string;
    unidadnegocio : Unidadnegocio;

    constructor() {
      this.id = 0;
      this.nombre ="";
      this.unidadnegocio = new Unidadnegocio();
      }
}