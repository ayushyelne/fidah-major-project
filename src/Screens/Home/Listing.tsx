import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {listing} from './Home.style';
import { Card } from "../../Components/Card";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { r1, r2 } from '../Recipe/recipe.mock';


const Listings = ({navigation}: {navigation: NativeStackNavigationProp<any>}) => {
	return(
		<FlatList 
			data={[r1,r2]}
			numColumns={2}
			contentContainerStyle={listing.container}
			keyExtractor={i => i.id}
			renderItem={({item}) => (
				<Card nvg={navigation} recipe={item}/>
			)}
		/>
	);
}

		// <View style={listing.container}>
		// 	<Card recipe={r1}></Card>
		// 	<Card recipe={r2}></Card>
		// </View>


export default Listings;