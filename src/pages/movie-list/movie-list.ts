import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';

/*
  Generated class for the MovieList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers: [MovieService]
})
export class MovieListPage {

  movies: Array<any>;


  constructor(public navController: NavController, private movieService: MovieService) {

    //let result = this.movieService.searchMovies("Arrow");
    //console.log(result);

  }

  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  itemTapped(event, movie) {
    console.log(movie);
    this.navController.push(MovieInfo, {
      movie: movie
    });
  }

  ionViewDidLoad() {
    console.log('Hello MovieList Page');
  }


}
