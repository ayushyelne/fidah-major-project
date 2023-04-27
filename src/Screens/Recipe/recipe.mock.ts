import Nutrition, { Quantity } from "./nutrition"
import Recipe, { RecipeCard, Time } from "./recipe"

export const r2: RecipeCard = {
		id: "#shawarma",
		name: "Shawarma",
		img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cdnparenting.com%2Farticles%2F2018%2F11%2F23151909%2FChicken-Shawarma.jpg&f=1&nofb=1&ipt=90c4e7c65dc51f69faa97a2203fc255baa6ed77825a96579079085fe6c076def&ipo=images",
		price: "₹60",
		etc: "non-veg protein",
		rating: 4,
}

export const shawarma: Recipe = new Recipe({
			id: "#shawarma",
			name: "Shawarma",
			author: "Ottoman",
			img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cdnparenting.com%2Farticles%2F2018%2F11%2F23151909%2FChicken-Shawarma.jpg&f=1&nofb=1&ipt=90c4e7c65dc51f69faa97a2203fc255baa6ed77825a96579079085fe6c076def&ipo=images",
			prep_time: new Time({h: 0, m: 4, s: 10}),
			rating: 4,
			ingredients: new Array(
				["Flatbread","2pcs"],
				["Chicken Slices","80g"],
				["Tahini Sauce","40ml"],
				["Cabbage","30g"],
				["Beetroot","25g"]
			),
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
				protein: new Quantity(78, "g"),
				fats: new Quantity(24, "g"),
				carbs: new Quantity(58,"g"),
				fiber: new Quantity(2.8, "g"),
				calories: new Quantity(773, "kcal"),
				portion: new Quantity(390,"g"),
				micro: new Array(
					["Iron", new Quantity(2,"g")],
					["Potassium", new Quantity(0.4,"g")],
					["Zinc", new Quantity(0.2,"g")],
				)
			}),
});

export const r1: RecipeCard = {
		id: "#paneer_jalfrezi",
		name: "Paneer Jalfrezi",
		img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flavourstreat.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fpaneer-jalfrezi-recipe-001-1024x1019.jpg&f=1&nofb=1&ipt=6bfaa084c9d8e4fefe0e01b12dee9f11731fa033c9b2ef5e5581c600dedb5d42&ipo=images",
		price: "₹120",
		etc: "veg protein",
		rating: 3,
	}