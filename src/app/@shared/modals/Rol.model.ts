export interface IRol {
    nombre: string;
    id: number;
}

export class Rol implements IRol {
    public nombre: string;
    public id: number;

    
  constructor(
    nombre: string,
    id: number,

    ){
     this.nombre =nombre;
     this.id=id;   
    }}