import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
	declarations: [
		NavBarComponent,
		Error404Component
	],
	imports: [
		RouterModule.forChild([
			{
				path: '**',
				component: Error404Component
			}
		])
	],
	exports: [
		NavBarComponent
	]
})
export class CoreModule {

}
