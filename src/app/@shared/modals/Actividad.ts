import { Equipo } from "./Equipo";
import { Equipogeneral } from "./Equipogeneral";
import { Reporte } from "./Reporte";

export class Actividad{
    id:number;
    numeroAct:number;
    descripcion:string;
    cumplimiento:string;
    observacion:string;
    permitivo:string;
    fcreacion:string;
    fmodificacion:string;
    usuarioact:string;
    usuariomod:string;
    detalleactividad:Detalleactividad[];
    equipogeneral:Equipogeneral;
    equipo:Equipo;
    reporte:Reporte;
    constructor() {
      this.id = 0;
      this.numeroAct = 0;
      this.descripcion ="";
      this.cumplimiento ="";
      this.observacion ="";
      this.permitivo ="";
      this.fcreacion ="";
      this.fmodificacion ="";
      this.usuarioact ="";
      this.usuariomod ="";
      this.equipogeneral = new Equipogeneral();
      this.detalleactividad = [];
      /* this.detalleactividad = []; */
      this.equipo = new Equipo();
      this.reporte = new Reporte();
      }
}



export class Detalleactividad{
  id: number;
  valorprueba:string;
  nomprueba:string;

  constructor (){
    this.id=0;
    this.valorprueba="";
    this.nomprueba="";
  }
}