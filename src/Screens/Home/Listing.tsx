import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {listing} from './Home.style';
import { RecipeCard, Card } from "../../Components/Card.tsx";


const Listings = () => {
	return(
		// <FlatList style={listing.container}>
		<View style={listing.container}>
			<Card recipe={r1}></Card>
			<Card recipe={r2}></Card>
		</View>
		// </FlatList>
	);
}


const r1: RecipeCard = {
		name: "Paneer Jalfrezi",
		img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flavourstreat.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fpaneer-jalfrezi-recipe-001-1024x1019.jpg&f=1&nofb=1&ipt=6bfaa084c9d8e4fefe0e01b12dee9f11731fa033c9b2ef5e5581c600dedb5d42&ipo=images",
		price: "₹120",
		etc: "veg protein"
	}
const r2: RecipeCard = {
		name: "Shawarma",
		img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cdnparenting.com%2Farticles%2F2018%2F11%2F23151909%2FChicken-Shawarma.jpg&f=1&nofb=1&ipt=90c4e7c65dc51f69faa97a2203fc255baa6ed77825a96579079085fe6c076def&ipo=images",
		price: "₹60",
		etc: "non-veg protein"
	}

export default Listings;
