import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ShoppingListService } from './../services/shopping-list/shopping-list.service';
import { ToastService } from './../services/toast/toast.service';

@NgModule({
  declarations: [
    MyApp 
    //HomePage - we comment this out because when it is here it means we are getting the HomePage component at runtime
    //            this is not what we want, we want to lazy load
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    //HomePage - we comment this out because when it is here it means we are getting the HomePage component at runtime
    //            this is not what we want, we want to lazy load
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ToastService
  ]
})
export class AppModule {}