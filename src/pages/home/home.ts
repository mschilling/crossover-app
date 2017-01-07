import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
    this.cards = af.database.list('/user_timelines/michael/dc', {
      query: {
        orderByChild: 'aired',
        limitToLast: 150
      }
    });
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
