import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../shared/_index';


@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

    @Input() movie: Movie;
    @Output() selected = new EventEmitter<Movie>();

    movieClick() {
        console.log('Click en pelicula');
        this.selected.emit(this.movie);
    }

}
