import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {TimelinePage} from '../pages/timeline/timeline';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TimelinePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TimelinePage
  ],
  providers: []
})
export class AppModule {}
