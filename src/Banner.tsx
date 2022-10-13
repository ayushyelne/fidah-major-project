/* 
    Create the top banner of the app
*/

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';

const bannerStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})

const Banner = () => {
    const [query, setQuery] = useState('');

    return (
        <View>
            <View 
                style={[ bannerStyle.container, { flexDirection: "row" } ]}>
                <Text>FoodInDaHud</Text>
                <Button title="Cool"/>
            </View>
            <TextInput 
                placeholder='Enter food item'
                onChangeText={t => setQuery(t)}
                defaultValue={query}
            />
        </View>
    );
}

export default Banner;