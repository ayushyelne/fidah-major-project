import React, { useContext } from 'react';
import { View, Image, Text, Pressable } from "react-native";
// import { nativeViewGestureHandler} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import Recipe, { RecipeCard } from '../../../../../Recipe/recipe';
import card from './Card.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SetActiveRecipe } from '../../../../Home';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dispatch$CartList } from '../../../../../../App';

function rate(n: number): JSX.Element {
	const hollow = <FontAwesome5 name="star"/>
	const filled = <FontAwesome name="star"/>

	if(n<=5) {
		let stars: JSX.Element[] = [];
		  for(let i = 0; i<5; i++) {
				if(n<=0) {
					stars.push(<FontAwesome5 key={i} name="star"/>)
				} else {
					stars.push(<FontAwesome key={i} name="star"/>)
				}
				if(n > 0) n--;
			}
		return ( <> {stars} </>);
	} else return (<></>)
}

const Card = ({nvg, recipe}: {nvg: NativeStackNavigationProp<any> , recipe: RecipeCard}) => {
	const setActiveRecipe = useContext(SetActiveRecipe);
	const dispatch$cart = useContext(Dispatch$CartList);
	const onClicked = () => {
		if (setActiveRecipe) { 
			setActiveRecipe(recipe.id);
			nvg.push('viewer');
		}
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
				<Text style={card.rating}>{rate(recipe.rating)}</Text>
					<Text style={card.price}>{recipe.price}</Text>
				{/* <View style={card.price_cart}> </View> */}
			</View>
			<Pressable style={card.cart} onPress={() => {dispatch$cart({do: 'add', payload: recipe })}}>
				<Icon style={card.cart_icon} name="cart-plus"/>
			</Pressable>
		</Pressable>
	)
}

export {Card};
