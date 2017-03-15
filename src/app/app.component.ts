import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Etiqueta HTML 
  // templateUrl: './app.component.html', // Vinculamos el archivo html (Template)
  template: '<app-toolbar></app-toolbar>',
  // styleUrls: ['./app.component.css'] // Cargando los estilos
})
export class AppComponent {
  title = 'app works!';
}
