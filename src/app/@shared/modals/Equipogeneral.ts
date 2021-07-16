import { Reporte } from "./Reporte";
import { Usuario } from "./Usuario";

export class Equipogeneral{
    id!:number;
    ot!:number;
    descripcion!:string;
    potencia!:string;
    modelo!:string;
    corriente!:string;
    serie!:string;
    tipo!:string;
    voltaje!:string;
    reporte!:Reporte;
    usuario!: Usuario;
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}