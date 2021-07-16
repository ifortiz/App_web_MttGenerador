export class Medicion{
    id!:number;
    marca!:string;
    modelo!:string;
    tipo!:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}