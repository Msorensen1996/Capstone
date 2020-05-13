import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController ,NavController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {environment} from '../environments/environment';
import{SETTINGS} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FirestorePipe } from './firestore.pipe';
import {EmailComposer} from '@ionic-native/email-composer/ngx'
firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [AppComponent, FirestorePipe],
  entryComponents: [],
  imports: [BrowserModule,
     FormsModule,
      IonicModule.forRoot(),
      
       AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: SETTINGS, useValue: {}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
