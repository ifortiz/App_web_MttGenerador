import { Perfil } from "./Perfil";

export class Usuario{
    id!:number;
    nombre!:string;
    apellido!:string;
    correo!:string;
    password!:string;
    perfiles?: Perfil[];
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
