import { Component } from '@angular/core';
import { MovieService, Movie } from '../shared/_index';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {

    titleList = 'Estrenos';
    data: Movie[];

    constructor(public service: MovieService) {
        this.data = service.movies;
    }

}
