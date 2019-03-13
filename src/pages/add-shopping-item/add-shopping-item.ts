import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: '',
    email: '',
    radio_name: '',
    img_url: '',
    slogan: '',
    stream: '',
    category: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
    this.shopping.addItem(item).then( ref => {
      this.toast.show(`${item.radio_name} Sent Successfully, Updated Soon Here ! Thanks For Sending`);
      this.navCtrl.setRoot(HomePage, { key: ref.key });
    });
  }

}
