import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			{id: 11, name: 'Dr Nice', bday: '1-23-83'},
			{id: 12, name: 'Narco', bday: '2-23-83'},
			{id: 13, name: 'Bombasto', bday: '3-23-83'},
			{id: 14, name: 'Celeritas', bday: '4-23-83'},
			{id: 15, name: 'Magneta', bday: '5-23-83'},
			{id: 16, name: 'RubberMan', bday: '6-23-83'},
			{id: 17, name: 'Dynama', bday: '7-23-83'},
			{id: 18, name: 'Dr IQ', bday: '8-23-83'},
			{id: 19, name: 'Magma', bday: '9-23-83'},
			{id: 20, name: 'Tornado', bday: '10-23-83'}
		];
		return {heroes};
	}

	// Overrides the genId method to ensure that a hero always has an id.
	// If the heroes array is empty,
	// the method below returns the initial number (11).
	// if the heroes array is not empty, the method below returns the highest
	// hero id + 1.
	genId(heroes: Hero[]): number {
		return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
	}
}
