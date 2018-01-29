import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { HomePage } from './home';

@NgModule({
	declarations: [HomePage],
	imports: [IonicPageModule.forChild(HomePage)] //homepage is going to be lazy loaded in future
})
export class HomeModule {
	
}