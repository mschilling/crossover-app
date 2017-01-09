import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { TimelinePage } from '../timeline/timeline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
    this.cards = af.database.list('/timelines/marvel', {
      query: {
        orderByChild: 'aired',
        limitToLast: 150
      }
    });
  }

   openTimeline(value) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    console.log('Open timeline', value);

    if(value=="1") {
      this.navCtrl.push(TimelinePage, { timeline: 1 });
    } else if (value=="2") {
      this.navCtrl.push(TimelinePage, { timeline: 2 });
    }
  }


addSong(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.cards.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}
}
