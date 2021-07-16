import { Central } from "./Central";

export class Unidad{
  id:number;
  nombre:string;
  central : Central;

  constructor() {
    this.id = 0;
    this.nombre ="";
    this.central = new Central();
    }
}