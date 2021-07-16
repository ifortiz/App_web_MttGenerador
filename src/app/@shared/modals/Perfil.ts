export class Perfil{
    id!:number;
    nombre!:string;
    permisos?: Permiso[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}

export class Permiso{
    id?: number;
    nombre?: string;

        constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}