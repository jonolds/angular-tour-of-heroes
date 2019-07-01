import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';

@NgModule({
	exports: [RouterModule]
})
export class AppRoutingModule {
}
