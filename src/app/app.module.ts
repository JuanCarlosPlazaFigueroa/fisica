import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaidaLibreComponentComponent } from './caida-libre-component/caida-libre-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovimientoMuaComponentComponent } from './movimiento-mua-component/movimiento-mua-component.component';

const appRoutes: Routes = [
  {path:'home',component:HomeComponentComponent},
  {path:'caidaLibre',component:CaidaLibreComponentComponent},
  {path:'movimientoMua',component:MovimientoMuaComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CaidaLibreComponentComponent,
    HomeComponentComponent,
    MovimientoMuaComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
