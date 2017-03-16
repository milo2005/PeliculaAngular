import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
    movies: Movie[];

    constructor() {

        this.movies = [];

        this.movies.push({
            nombre: 'Logan', duracion: 90, fecha: new Date()
            , image: 'http://www.sopitas.com/wp-content/uploads/2016/10/logan-1.jpg'
        });
        this.movies.push({
            nombre: 'Skull Island', duracion: 90, fecha: new Date()
            , image: 'http://i.imgur.com/NE2HmPW.jpg'
        });
        this.movies.push({
            nombre: 'Wonder Woman', duracion: 90, fecha: new Date()
            , image: 'http://www.hdwallpapers.in/walls/gal_gadot_wonder_woman_2017-wide.jpg'
        });
        this.movies.push({
            nombre: 'Justice League', duracion: 90, fecha: new Date()
            , image: 'http://www.cheatsheet.com/wp-content/uploads/2016/07/Justice-League-first-image.jpg'
        });
    }
}