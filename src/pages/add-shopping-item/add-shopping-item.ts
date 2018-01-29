import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/items/item.model';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { ToastService } from './../../services/toast/toast.service';

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
		quantity: undefined,
		price: undefined //undefined means there is no default value
	}

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private shopping: ShoppingListService,
				private toast: ToastService) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddShoppingItemPage');
	}

	addItem(item: Item) {
		// .then() is what to do after addItem
		this.shopping.addItem(item).then(ref => {
			console.log(ref.key); //key of the item we have added
			this.toast.show(`${item.name} added!`);
			this.navCtrl.setRoot('HomePage', {key: ref.key})
		});
	}

}
