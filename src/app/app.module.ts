import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { PlayerPage } from '../pages/player/player';
import { RadioProvider } from '../providers/radio/radio';
import { StatusBar } from '@ionic-native/status-bar';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { ToastService } from './../services/toast/toast.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence() //.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RadioProvider,
    ShoppingListService,
    ToastService,
    SocialSharing,
    Vibration
  ]
})
export class AppModule {}
