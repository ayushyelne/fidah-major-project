import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import THEME from '../../assets/theme';


const cart = StyleSheet.create({
    empty_body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
    },
    empty_text: {
        fontSize: 10,
        color: THEME.alt_text,
        fontStyle: "italic",
    }
})

const Cart = () => {
    return (
    <View style={cart.empty_body}>
        <Icon name="cart-minus" size={55} color={THEME.alt_text}/>
        <Text style={cart.empty_text}>Your cart is empty :(</Text>
    </View>);
}

export default Cart;