import {useReducer} from "react";
import Recipe, { RecipeCard } from "../Recipe/recipe";

export interface CartActions {
	do: 'add' | 'delete' | 'get' | 'deleteAll',
	/** ### `payload` 
	 * - For deletion pass id i.e. `string`  
	 * - For adding pass `Recipe`
	 */
	payload: string | RecipeCard, 
}
export function cartReducer(state: [RecipeCard,number][], action: CartActions): [RecipeCard,number][] {
	switch(action.do){
		case 'add':
			console.log("Payload: ",typeof action.payload);
			if(typeof action.payload === "object") {
				let presentIdx = state.findIndex(x => x[0].id === action.payload.id); 
				console.log("PresentIDX: ", presentIdx);
				if(presentIdx >= 0){
					console.log("Present!");
					let newArr = [...state];
					newArr[presentIdx][1] += 1;
					return newArr;
				} else return [...state, [action.payload,1]];
				// return [...state[0], action.payload]
			} else return state;
		case 'delete':
			if(typeof action.payload === "string") {
				if(state.length == 1) {
					return []
				} else {
					let newArr = [...state];
					let idx = newArr.findIndex( x => x[0].id === action.payload);
					newArr.splice(idx, 1);
					return newArr
				}
			}
			return state
		case 'get':
			return state;
		case 'deleteAll':
			return []
		default:
			return state
	}
}