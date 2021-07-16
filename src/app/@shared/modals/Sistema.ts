export class Sistema{
    id!:number;
    nombre!:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}