import {useReducer} from "react";

interface CartActions {
	do: 'add' | 'delete',
	/** ### `payload` 
	 * - For deletion pass id i.e. `string`  
	 * - For adding pass `Recipe`
	 */
	payload: string | Recipe, 
}
function cartReducer(state: Recipe[], action: CartActions): Recipe[] {
	switch(action.do){
		case 'add':
			console.log("Payload: ",typeof action.payload);
			if(typeof action.payload != "string") {
				return [...state, action.payload]
			} else return state;
		case 'delete':
			if(typeof action.payload === "string") {
				if(state.length == 1) {
					return []
				} else {
					let newArr = [...state];
					let idx = newArr.findIndex( x => x.id === action.payload);
					newArr.splice(idx, 1);
					return newArr
				}
			}
			return state
		default:
			return state
	}
}
