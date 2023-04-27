import React, { FunctionComponent } from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import THEME from '../../assets/theme';
import nutrition from './Nutrition.style';

interface Nutrient {
    name: string,
    icon: JSX.Element,
}

const macroNutrients: Array<Nutrient> = [
    { 
        name: 'Protein',
        // image: 'https://media.thatsweetgift.com/wp-content/uploads/2019/05/best-protein-meals.jpg',
        icon: 
            <FontAwesome5 
                name="dna" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
                style={nutrition.icon}
            />
    },
    {
        name: 'Carbs',
        icon: 
            <FontAwesome5 
                name="cubes" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
                style={nutrition.icon}
            />
    },
    {
        name: 'Fats',
        icon: 
            <FontAwesome5 
                name="burn" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
                style={nutrition.icon}
            />
    },
    {
        name: 'Minerals',
        icon: 
            <FontAwesome5 
                name="bone" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
                style={nutrition.icon}
            />
    },
    {
        name: 'Vitamins',
        icon: 
            <FontAwesome5 
                name="capsules" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
            />
    },
    {
        name: 'Fibre',
        icon: 
            <FontAwesome5 
                name="carrot" 
                size={nutrition.icon.fontSize} 
                color={nutrition.text.color} 
            />
    },
];


const NutrientCard = ({n}: {n: Nutrient} ) => {
    return(
        <Pressable style={nutrition.card}>
            {n.icon}
            <Text style={nutrition.text}>{n.name}</Text>
        </Pressable>
    );
}


const Nutrition = () => {
    return (
        <View style={nutrition.body}>
            <TextInput 
                style={nutrition.search} 
                placeholderTextColor={THEME.alt_text} 
                placeholder='Samosa...'
            />
            <FlatList 
                data={macroNutrients}
                numColumns={2}
                keyExtractor={x => x.name}
                renderItem={({item})=> (<NutrientCard n={item}/>)}
            />
        </View>
    );
}

export default Nutrition;