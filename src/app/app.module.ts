import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';

// //http://www.joshmorony.com/building-a-crud-ionic-2-application-with-firebase-angularfire/
// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// Add momentjs support: https://github.com/urish/angular-moment
import { MomentModule } from 'angular2-moment';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAPB8rkudnrFh7rRxFbHpuq5KyzJXEiOgc",
  authDomain: "crossover-app.firebaseapp.com",
  databaseURL: "https://crossover-app.firebaseio.com",
  storageBucket: "crossover-app.appspot.com",
  messagingSenderId: "59138885886"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimelinePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimelinePage // Maybe remove in near future
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
