import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio';


@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  params : any;
  playing: boolean = false;
  stationUrl: any;
  loadingPopup: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    public viewCtrl: ViewController, public alertCtrl: AlertController, 
    public radio : RadioProvider) {
    this.params = this.navParams.get('radio');
    this.stationUrl = this.params.url;
    this.play(this.stationUrl);

  }

  ionViewDidLeave() {
    this.stop();
  }

  play(url) {
    this.loadingPopup = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please Wait'
    });
    this.loadingPopup.present();
    console.log("play clicked");
    console.log(url);
    this.playing = !this.playing;
    this.radio.play(url).then(() => {
      console.log('Return Playing');
      this.loadingPopup.dismiss();
    })
      .catch(error => {
        console.log("error=" + error);
        this.presentAlert("Error msg= " + error );
        this.stop();
        this.playing = false;
        this.loadingPopup.dismiss();
      });

  }

  pause() {
    this.playing = !this.playing;
    this.radio.stop();
  }

  stop() {
    this.radio.stop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
  
}