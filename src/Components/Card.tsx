import React from 'react';
import { View, Image, Text, Pressable } from "react-native";
// import { nativeViewGestureHandler} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import Recipe, { RecipeCard } from '../Screens/Recipe/recipe';
import card from './Card.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Card = ({nvg, recipe}: {nvg: NativeStackNavigationProp<any> , recipe: RecipeCard}) => {
	const onClicked = () => {
 		nvg.push('viewer')
		console.log(recipe.id);
	}

	return(
		<Pressable style={card.frame} onPress={onClicked}>
			<Image style={card.image} source={{ uri: recipe.img }}/>
			{(recipe.etc) 
				? <Text style={card.info}>{recipe.etc}</Text> 
				: <></> 
			}
			<View style={card.desc}>
				<Text style={card.name}>{recipe.name}</Text>
				<Text style={card.price}>{recipe.price}</Text>
			</View>
		</Pressable>
	)
}

export {Card};
