import {Item} from './../../models/items/item.model';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

	private shoppingListRef = this.db.list<Item>('shopping-list');
	
	constructor(private db: AngularFireDatabase) {}

	getShoppingList() {
		return this.shoppingListRef;
	}

	addItem(item: Item) {
		return this.shoppingListRef.push(item); //push item to the database
	}

	editItem(item: Item) {
		return this.shoppingListRef.update(item.key, item); //updates the item that we selected based on the key
	}

	//in param - name is item of type item
	removeItem(item: Item) {
		return this.shoppingListRef.remove(item.key);
	}
}