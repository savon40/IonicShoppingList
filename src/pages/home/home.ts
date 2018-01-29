import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Item } from './../../models/items/item.model';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@IonicPage() //comes from ionic angular
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	shoppingList$: Observable<Item[]>;
	constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
		this.shoppingList$ = this.shopping
			.getShoppingList() //returns DB List
			.snapshotChanges() //get the changes from the DB List in Key Value pair
			.map( changes => {
				// for each one of these changes return new object
				return changes.map(c => ({
					key: c.payload.key, 
					...c.payload.val(),
				}));
			});
	}

	// example return:
	// {
	// 	key: 'value-here',
	// 	name: 'iPad Pro'
	// }

}
