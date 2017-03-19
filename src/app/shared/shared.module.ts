import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DuracionPipe } from './pipes/duracion.pipe';

@NgModule({
    declarations: [ToolbarComponent, DuracionPipe],
    exports: [ToolbarComponent, DuracionPipe] // Que elementos se exportan del modulo
})
export class SharedModule {

}