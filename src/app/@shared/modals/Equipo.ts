import { Sistema } from "./Sistema";

export class Equipo{
    idcod:number;
    descripcion:string;
    potencia:string;
    modelo:string;
    corrientenom:string;
    serie:string;
    tipo:string;
    voltaje:string;
    sistema : Sistema;

    constructor() {
      this.idcod = 0;
      this.descripcion ="";
      this.potencia ="";
      this.modelo ="";
      this.corrientenom ="";
      this.serie ="";
      this.tipo ="";
      this.voltaje ="";
      this.sistema = new Sistema();
      }
}


export class Equipo2{
  sistemaId:number;

  constructor() {
    this.sistemaId = 0;
    }
}