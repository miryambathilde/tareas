import { NgModule } from '@angular/core';
/* formsModule */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Componentes//
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TareasComponent } from './componentes/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
