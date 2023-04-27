import Nutrition, { Quantity } from "./nutrition";
import { shawarma } from "./recipe.mock";

export class Time {
	hours: number;
	minutes: number;
	seconds: number;

	/** ### Time
	* Used to store time in hh:mm:ss format
	* This initialization is used when time is in 
	* object of type `{h: _, m: _, s: _}`
	*/
	constructor(obj: any) {
		this.hours = obj.h;
		this.minutes = obj.m;
		this.seconds = obj.s;
	}

	toString(): string {
		var h = this.hours ? this.hours + "h" : "";
		var m = this.minutes ? this.minutes + "m" : "";
		var s = this.seconds ? this.seconds + "s" : "";
		return [
			h,
			m,
			s,
		].join('');
	}
}

/** # Recipe
* Stores recipes.
* @property {string} name			- Name of the recipe
* @property {string} author			- Author's name
* @property {string} img			- URL of the recipe's image
* @property {Time} 	prep_time		- Time to prepare the recipe
* @property {Array<string>} steps	- Steps to cook the recipe
*/
class Recipe {
	readonly id: string;
	readonly name: string;
	readonly author: string;
	readonly img: string;
	readonly prep_time: Time;
	readonly ingredients: string[][];
	readonly steps: string[];
	readonly n_values: Nutrition;
	readonly rating: number;

	/** # Recipe
	* Recipe Format:
	*
	* *Keys need to be of the names below*
	* ```
	*	{ name, author, img, prep_time, steps	}
	* ```
	*/
	constructor(obj: any) {
		this.id = obj.id;
		this.name = obj.name;
		this.author = obj.author;
		this.img = obj.img;
		this.prep_time = obj.prep_time; this.steps = obj.steps;
		this.ingredients = obj.ingredients;
		this.steps = obj.steps;
		this.n_values = obj.n_values;
		this.rating = obj.rating;
	}

	static mock(): Recipe {
		return shawarma
	}

	summarize() {
	}
}

export interface RecipeCard {
	id: string,
	name: string,
	img: string,
	price: string,
	etc: string | undefined,
	rating: number,
}

export default Recipe;