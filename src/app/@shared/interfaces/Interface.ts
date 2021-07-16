import { Central } from "../modals/Central";
import { Equipo } from "../modals/Equipo";
import { Medicion } from "../modals/Medicion";
import { Sistema } from "../modals/Sistema";
import { Unidad } from "../modals/Unidad";
import { Unidadnegocio } from "../modals/Unidadnegocio";
import { Usuario } from "../modals/Usuario";

export interface ICentral{
    central:Central;
    mensaje:string;
}
export interface IUnidadnegocio{
    unidaddenegocio:Unidadnegocio;
    mensaje:string;
}

export interface IEquipo{
    equipo:Equipo;
    mensaje:string;
}

export interface IMedicion{
    medicion:Medicion;
    mensaje:string;
}

export interface ISistema{
    sistema:Sistema;
    mensaje:string;
}

export interface IUsuario{
    usuario:Usuario;
    mensaje:string;
}
export interface IReporte{
        usuario:Usuario;
        mensaje:string;
}
export interface IUnidad{
        unidad:Unidad;
        mensaje:string;       
}