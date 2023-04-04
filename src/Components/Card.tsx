import React from 'react';
import { View, Image, StyleSheet, Text } from "react-native";
import THEME from "assets/theme";

export interface RecipeCard {
	name: string,
	img: string,
	price: string,
	etc: string | undefined,
}

const card = StyleSheet.create({
	frame: {
		flex: 19,
		width:"50%",
		padding: 10,
		justifyContent: "flex-start",
		alignContent: "space-between",
		alignItems: "flex-start",
		rowGap: 50,
		backgroundColor: THEME.base,
		borderWidth: 1,
		borderColor: "silver",
		borderRadius: 28,
	},
	image: {
		flex: 6,
		resizeMode: 'cover',
		objectFit: 'contain',
		width: "98%",
		height: "50%",
		alignSelf: "center",
		borderRadius: 19,
		// marginBottom: 4,
		//
		borderWidth: 2,
		borderColor: "lightgreen",
	},
	info: {
		flex: 1.3,
		fontSize: 10,
		textTransform: 'lowercase',
		letterSpacing: 1,
		fontStyle: "monospace",
		backgroundColor: THEME.text,
		color: THEME.base,
		borderRadius: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		textAlignVertical: "center",


		borderWidth: 2,
		borderColor: "cyan",
	},
	desc: {
		flex: 6,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		borderWidth: 2,
		borderColor: "red",
	},
	name: {
		flex: 4,
		color: "white",
		// fontSize: 19,
		alignSelf: "center",
	},
	price: {
		flex: 2,
		textAlign: "right",
		alignSelf: "flex-end",
		fontWeight: "bold",
		// fontSize: 19,
		alignSelf: "center",
	},
});


const Card = (props : {recipe: RecipeCard}) => {
	return(
		<View style={card.frame}>
			<Image style={card.image} source={{ uri: props.recipe.img }}/>
			{(props.recipe.etc) 
				? <Text style={card.info}>{props.recipe.etc}</Text> 
				: <></> 
			}
			<View style={card.desc}>
				<Text style={card.name}>{props.recipe.name}</Text>
				<Text style={card.price}>{props.recipe.price}</Text>
			</View>
		</View>
	)
}

export {Card};
