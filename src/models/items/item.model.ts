export interface Item {
	key?: string; //key for item when we add it to the firebase database //question mark means key is optional b/c firebase will auto add it
	name: string;
	quantity: number;
	price: number;
}