import Nutrition from "./nutrition";

class Time {
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
	readonly name: string;
	readonly author: string;
	readonly img: string;
	readonly prep_time: Time;
	readonly ingredients: Array<string>;
	readonly steps: Array<string>;
	readonly n_values: Nutrition

	/** # Recipe
	* Recipe Format:
	*
	* *Keys need to be of the names below*
	* ```
	*	{ name, author, img, prep_time, steps	}
	* ```
	*/
	constructor(obj: any) {
		this.name = obj.name;
		this.author = obj.author;
		this.img = obj.img;
		this.prep_time = obj.prep_time; this.steps = obj.steps;
		this.ingredients = obj.ingredients;
		this.steps = obj.steps;
		this.n_values = obj.n_values;
	}

	static mock(): Recipe {
		return new Recipe({
			name: "Shawarma",
			author: "Ottoman",
			img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cdnparenting.com%2Farticles%2F2018%2F11%2F23151909%2FChicken-Shawarma.jpg&f=1&nofb=1&ipt=90c4e7c65dc51f69faa97a2203fc255baa6ed77825a96579079085fe6c076def&ipo=images",
			prep_time: new Time({h: 0, m: 4, s: 10}),
			ingredients: new Array([
				"Flatbread",
				"Chicken Slices",
				"Tahini Sauce",
				"Cabbage",
				"Beetroot"
			]) ,
			steps: new Array(
				"Make Tahini sauce",
				"Make the pickled cabbage",
				"Prepare the flatbed",
				"Mix the spices together in a bowl",
				"Add the chicken strips to the mixture and toss them before drizzling them with olive oil",
				"Prepare your grill",
				"Place the spiced chicken onto the foil",
				"Remove the chicken from the grill and place it on a serving platter",
				"Wrap your chicken in the flatbread with the other ingredients"
			),
			n_values: new Nutrition({
				protein: [78, "g"],
				fats: [24, "g"],
				carbs: [58,"g"],
				fiber: [2.8, "g"],
				calories: [773, "kcal"]
			}),
		})
	}
}

export default Recipe;