import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { MovieService } from './movies/shared/_index';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

@NgModule({
  declarations: [ // Componentes, Directivas y Pipes que se usen en el modulo
    AppComponent, MovieListComponent, MovieCardComponent
  ],
  imports: [ // Importamos Componentes, Directivas, Servicios y Pipes de otros modulos
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [MovieService], // Creamos una instancia unica de Servicios
  bootstrap: [AppComponent] // El componente inicial
})
export class AppModule { }
