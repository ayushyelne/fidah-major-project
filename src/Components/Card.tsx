import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import card from './Card.style';

export interface RecipeCard {
	id: string,
	name: string,
	img: string,
	price: string,
	etc: string | undefined,
}

const Card = (props : {recipe: RecipeCard}) => {
	const onClicked = () => {
		console.log(props.recipe.id);
	}

	return(
		<Pressable style={card.frame} onPress={onClicked}>
			<Image style={card.image} source={{ uri: props.recipe.img }}/>
			{(props.recipe.etc) 
				? <Text style={card.info}>{props.recipe.etc}</Text> 
				: <></> 
			}
			<View style={card.desc}>
				<Text style={card.name}>{props.recipe.name}</Text>
				<Text style={card.price}>{props.recipe.price}</Text>
			</View>
		</Pressable>
	)
}

export {Card};
