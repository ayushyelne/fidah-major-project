import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import { Light, Dark } from '../../../assets/theme';

const bannerStyle = StyleSheet.create({
    container: {
        flex: .05,
        padding: 20,
		backgroundColor: Dark.accent,
    },
	title: { 
		flex: 1,
		fontSize: 19,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: Dark.text,
	},
})

const Banner = () => {
    return (
        <>
            <View 
                style={[ bannerStyle.container, { flexDirection: "row" } ]}>
                <Text style={bannerStyle.title}>FoodInDaHud</Text>
            </View>
        </>
    );
}

export default Banner;
