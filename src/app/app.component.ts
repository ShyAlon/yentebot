import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    var config = {
      apiKey: "AIzaSyAhD4-YLQTXoGmJ_OepDH3I7QF3tZ32UA4",
      authDomain: "yachnebot.firebaseapp.com",
      databaseURL: "https://yachnebot.firebaseio.com",
      projectId: "yachnebot",
      storageBucket: "",
      messagingSenderId: "655901438861"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

