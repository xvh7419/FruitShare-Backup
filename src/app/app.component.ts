//    This root component needs to import everything required for app.
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';
import { AngularFire } from 'angularfire2';
import { LoadingController } from 'ionic-angular';

//    Connect the root component model with a view and initialise a class.
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform, af: AngularFire, public loadingCtrl: LoadingController) {

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
//    Initilising Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCddCnyk5LBaBQtvkslgmvMLVYL_46HwWQ",
      authDomain: "fruit-share-1474847572914.firebaseapp.com",
      databaseURL: "https://fruit-share-1474847572914.firebaseio.com",
      storageBucket: "fruit-share-1474847572914.appspot.com",
      messagingSenderId: "81717061829"
    });

//    Code to direct to login page if user isnt logged in
//    and direct to map page if user is logged in.
  //  firebase.auth().onAuthStateChanged((user) => {
  //    if (user) {
  //      this.rootPage = MapPage;
   //
	// 	let loader = this.loadingCtrl.create({
	// 		content: "Logging in....",
	// 		duration: 500
	// 	});
	// 	loader.present();
   //
  //      console.log("User is logged in. Direct to MapPage");
  //    } else {
  //      this.rootPage = LoginPage;
  //      console.log("User isn't logged in. Direct to LoginPage");
  //    }
  //  });

  }
}
