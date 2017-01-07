import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


// //http://www.joshmorony.com/building-a-crud-ionic-2-application-with-firebase-angularfire/
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAPB8rkudnrFh7rRxFbHpuq5KyzJXEiOgc",
    authDomain: "crossover-app.firebaseapp.com",
    databaseURL: "https://crossover-app.firebaseio.com",
    storageBucket: "crossover-app.appspot.com",
    messagingSenderId: "59138885886"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
