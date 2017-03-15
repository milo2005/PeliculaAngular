import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent] // Que elementos se exportan del modulo
})
export class SharedModule {

}