import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/usuario/add/add.component';
import { EditComponent } from './pages/usuario/edit/edit.component';
import { ListarComponent } from './pages/usuario/listar/listar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { NavComponent } from './@shared/components/nav/nav.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AddCentralComponent } from './pages/central/add-central/add-central.component';
import { EditCentralComponent } from './pages/central/edit-central/edit-central.component';
import { ListarCentralComponent } from './pages/central/listar-central/listar-central.component';
import { AddMedicionComponent } from './pages/medicion/add-medicion/add-medicion.component';
import { EditMedicionComponent } from './pages/medicion/edit-medicion/edit-medicion.component';
import { ListarMedicionComponent } from './pages/medicion/listar-medicion/listar-medicion.component';
import { ListarEquipoComponent } from './pages/equipo/listar-equipo/listar-equipo.component';
import { AddEquipoComponent } from './pages/equipo/add-equipo/add-equipo.component';
import { EditEquipoComponent } from './pages/equipo/edit-equipo/edit-equipo.component';
import { AddSistemaComponent } from './pages/sistema/add-sistema/add-sistema.component';
import { EditSistemaComponent } from './pages/sistema/edit-sistema/edit-sistema.component';
import { ListarSistemaComponent } from './pages/sistema/listar-sistema/listar-sistema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './@core/components/modal/modal.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { LoginComponent } from './pages/login/login.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AddUnidadComponent } from './pages/unidad/add-unidad/add-unidad.component';
import { EditUnidadComponent } from './pages/unidad/edit-unidad/edit-unidad.component';
import { ListUnidadComponent } from './pages/unidad/list-unidad/list-unidad.component';
import { AddUnidadnegocioComponent } from './pages/unidadnegocio/add-unidadnegocio/add-unidadnegocio.component';
import { EditUnidadnegocioComponent } from './pages/unidadnegocio/edit-unidadnegocio/edit-unidadnegocio.component';
import { ListarUnidadnegocioComponent } from './pages/unidadnegocio/listar-unidadnegocio/listar-unidadnegocio.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListOtComponent } from './pages/ot/list-ot/list-ot.component';
import { ViewOtComponent } from './pages/ot/view-ot/view-ot.component';
import { ViewIdcodComponent } from './pages/idcod/view-idcod/view-idcod.component';
import { ListIdcodComponent } from './pages/idcod/list-idcod/list-idcod.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent,
    ModuloComponent,
    NavComponent,
    RegistrarComponent,
    AddCentralComponent,
    EditCentralComponent,
    ListarCentralComponent,
    AddMedicionComponent,
    EditMedicionComponent,
    ListarMedicionComponent,
    ListarEquipoComponent,
    AddEquipoComponent,
    EditEquipoComponent,
    AddSistemaComponent,
    EditSistemaComponent,
    ListarSistemaComponent,
    ModalComponent,
    LoginComponent,
    AddUnidadnegocioComponent,
    EditUnidadnegocioComponent,
    ListarUnidadnegocioComponent,
    ReportesComponent,
    HistorialComponent,
    AddUnidadComponent,
    EditUnidadComponent,
    ListUnidadComponent,
    ListOtComponent,
    ViewOtComponent,
    ViewIdcodComponent,
    ListIdcodComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSmartModalModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
