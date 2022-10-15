import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

interface Nutrient {
    name: string,
    image: string
}

const nutrients: Array<Nutrient> = [
    { 
        name: 'Protein',
        image: 'https://media.thatsweetgift.com/wp-content/uploads/2019/05/best-protein-meals.jpg'
    },
    {
        name: 'Carbs',
        image: ''
    },
    {
        name: 'Fats',
        image: ''
    },
    {
        name: 'Minerals',
        image: ''
    },
    {
        name: 'Vitamins',
        image: ''
    },
    {
        name: 'Fibre',
        image: ''
    },
];


const NutrientCard = ({name, image}: Nutrient ) => {
    return(
        <Pressable>
            <ImageBackground imageStyle={nutri.cardImage} style={nutri.card} resizeMode='cover' source={{ uri: image }}>
                <Text style={nutri.text}>{name}</Text>
            </ImageBackground>
        </Pressable>
    );
}

const nutri = StyleSheet.create({
    search: {
        padding: 20,
        backgroundColor: "lightgray",
        color: "black"
    },
    cardImage: {
        borderRadius: 15
    },
    card: {
        width: 150,
        height: 150,
        padding: 25,
        paddingTop: 73,
    },
    text: {
        fontSize: 19,
        fontWeight: "bold",
        color: "black",
    }
});

const Nutrition = () => {
    return (
        <>
            <TextInput style={nutri.search} placeholderTextColor="darkgray" placeholder='Naughty Samosa...'/>
            <ScrollView>
                {
                    nutrients.map( (n) => {
                        return <NutrientCard name={n.name} image={n.image}/>
                    })
                }
            </ScrollView>
        </>
    );
}

export default Nutrition;