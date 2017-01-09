import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Timeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  cards: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    console.log('Fetch data from Firebase');
    console.log('navParams', navParams);

    let path = '/timelines/marvel';

    switch(navParams.data.timeline) {
      case 1:
        path = `/timelines/dc`;
        break;
      case 2:
        path = `/timelines/marvel`;
        break;
    }


    this.cards = af.database.list(path, {
      query: {
        orderByChild: 'aired',
        limitToLast: 15
      }
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TimelinePage');
  }

}
