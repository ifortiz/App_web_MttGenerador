import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AddComponent } from './pages/usuario/add/add.component';
import { EditComponent } from './pages/usuario/edit/edit.component';
import { ListarComponent } from './pages/usuario/listar/listar.component';
import { ListarCentralComponent } from './pages/central/listar-central/listar-central.component';
import { AddCentralComponent } from './pages/central/add-central/add-central.component';
import { ListarMedicionComponent } from './pages/medicion/listar-medicion/listar-medicion.component';
import { AddMedicionComponent } from './pages/medicion/add-medicion/add-medicion.component';
import { ListarEquipoComponent } from './pages/equipo/listar-equipo/listar-equipo.component';
import { AddEquipoComponent } from './pages/equipo/add-equipo/add-equipo.component';
import { ListarSistemaComponent } from './pages/sistema/listar-sistema/listar-sistema.component';
import { AddSistemaComponent } from './pages/sistema/add-sistema/add-sistema.component';
import { EditCentralComponent } from './pages/central/edit-central/edit-central.component';
import { EditEquipoComponent } from './pages/equipo/edit-equipo/edit-equipo.component';
import { LoginComponent } from './pages/login/login.component';
import { EditSistemaComponent } from './pages/sistema/edit-sistema/edit-sistema.component';
import { ServiceGuard } from './@shared/guard/service.guard';
import { HistorialComponent } from './pages/historial/historial.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ListUnidadComponent } from './pages/unidad/list-unidad/list-unidad.component';
import { AddUnidadComponent } from './pages/unidad/add-unidad/add-unidad.component';
import { EditUnidadComponent } from './pages/unidad/edit-unidad/edit-unidad.component';
import { AddUnidadnegocioComponent } from './pages/unidadnegocio/add-unidadnegocio/add-unidadnegocio.component';
import { EditUnidadnegocioComponent } from './pages/unidadnegocio/edit-unidadnegocio/edit-unidadnegocio.component';
import { ListarUnidadnegocioComponent } from './pages/unidadnegocio/listar-unidadnegocio/listar-unidadnegocio.component';
import { ListOtComponent } from './pages/ot/list-ot/list-ot.component';
import { ListIdcodComponent } from './pages/idcod/list-idcod/list-idcod.component';
import { ViewOtComponent } from './pages/ot/view-ot/view-ot.component';
import { ViewIdcodComponent } from './pages/idcod/view-idcod/view-idcod.component';


const routes: Routes = [
  {path: 'list-usuario', component:ListarComponent},
  {path: 'add-usuario', component:AddComponent},
  {path: 'modulos', component: ModuloComponent },
  {path: 'ingresar', component: RegistrarComponent },
  {path: 'usuarios', component: ListarComponent},
  {path: 'edit-usuario/:id', component: EditComponent},
  {path: 'list-central', component: ListarCentralComponent},
  {path: 'add-central', component: AddCentralComponent},
  {path: 'list-central', component: ListarCentralComponent},
  {path: 'edit-central/:id', component: EditCentralComponent},
  {path: 'edit-equipo/:id', component: EditEquipoComponent},
  {path: 'list-medicion', component: ListarMedicionComponent},
  {path: 'add-medicion', component: AddMedicionComponent},
  {path: 'list-equipo', component: ListarEquipoComponent},
  {path: 'add-equipo', component: AddEquipoComponent},
  {path: 'list-sistema', component: ListarSistemaComponent},
  {path: 'add-sistema', component: AddSistemaComponent},
  {path: 'edit-sistema/:id', component: EditSistemaComponent},
  {path: 'add-unidadnegocio', component: AddUnidadnegocioComponent},
  {path: 'edit-unidadnegocio/:id', component: EditUnidadnegocioComponent},
  {path: 'list-unidadnegocio', component: ListarUnidadnegocioComponent},
  {path: 'list-historial', component: HistorialComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'list-ot', component: ListOtComponent},
  {path: 'list-idcod', component: ListIdcodComponent},
  {path: 'list-unidad', component: ListUnidadComponent},
  {path: 'add-unidad', component: AddUnidadComponent},
  {path: 'edit-unidad/:id', component: EditUnidadComponent},
  {path: 'view-actividad/:ot', component: ViewOtComponent},
  {path: 'view-reporte/:ot', component: ViewIdcodComponent},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
