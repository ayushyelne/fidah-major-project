import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

const bnav = StyleSheet.create({
	bnav: {
		flex: .12,
		flexDirection: "row",
		flexGap: "1",
		justifyContent: "space-evenly",
		alignContent: "center",
		borderRadius: 40,
		backgroundColor: "#ff3c38",
		color: "black",
	},
	button: {
		alignItems: "center",
		borderRadius: 4,
	},
	text: {
		color: "white",
		fontWeight: "bold",
	}
});

const Bottombnav = () => {
	return (
		<View style={bnav.bnav}>
			<Navbutton name="Home"/>
			<Navbutton name="Nutrition"/>
			<Navbutton name="Cart"/>
			<Navbutton name="Account"/>
		</View>
	);
}

const Navbutton = ({name}: { name: string }) => {
	return(
		<Pressable style={bnav.button}>
			<Text style={bnav.text}>{name}</Text>
		</Pressable>
	);
}

export default Bottombnav;
