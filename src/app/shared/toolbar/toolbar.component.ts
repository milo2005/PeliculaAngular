import { Component } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styles: [require('./toolbar.component.css')]
})
export class ToolbarComponent {

    title: string = "Estrenos";

}
