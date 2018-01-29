import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {
	constructor(private toastCtrl: ToastController) {}

	// setting the number in the params gives a default
	show(message: string, duration: number = 3000) {
		return this.toastCtrl
				.create({
					message,
					duration
				})
				.present();
	}
}