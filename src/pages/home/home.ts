import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ModalController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PlayerPage } from './../player/player';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

interface Items {
  description: string;
  fq: number;
  image : string;
  title : string;
  url : string;
  category: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message:string = 'Download All Haryanvi Radios Free From https://play.google.com/store/apps/details?id=com.indianwebradios.www&hl=en';

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection

  constructor(public navCtrl: NavController, private afs: AngularFirestore,
    public modalCtrl : ModalController, private statusBar: StatusBar, private socialSharing: SocialSharing) {
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);

      // set status bar to white
      this.statusBar.backgroundColorByHexString('#32db64');
      
  }

  ionViewWillEnter() {

    this.itemsCollection = this.afs.collection('radios'); //ref()
    this.items = this.itemsCollection.valueChanges();

  }

  openPlayer(radio) {
    let profileModal = this.modalCtrl.create(PlayerPage, {
      radio: radio
    });
    profileModal.present();
  }

  share(){
    this.socialSharing.share(this.message)
    .then(()=>{

    }).catch(()=>{

    });
  }

}
