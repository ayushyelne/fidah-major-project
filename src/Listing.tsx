import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Light, Dark} from '../assets/theme.tsx'


const list = StyleSheet.create({
	container: {
		flex: .3,
		backgroundColor: Dark.base,
		borderRadius: 40,
	},
})

const Listings = () => {
	return(
		<FlatList style={list.container}>
			<Text>Meals here!</Text>
		</FlatList>
	);
}


export default Listings;
