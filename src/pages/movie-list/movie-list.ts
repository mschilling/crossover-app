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

  constructor(public navCtrl: NavController, private movieService: MovieService) {}

  ionViewDidLoad() {
    console.log('Hello MovieList Page');
  }

}
