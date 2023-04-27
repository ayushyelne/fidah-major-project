import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartList, Dispatch$CartList } from '../../App';
import THEME from '../../assets/theme';
import { RecipeCard } from '../Recipe/recipe';
import { CartActions } from './cart';
import cart from './Cart.style';

const Seperator = () => {
    return <View style={cart.seperator} />
}

const Cart = () => {
    const cartlist = useContext(CartList);
    const dispatch$cart = useContext(Dispatch$CartList);

    function totalPrice(): string {
        if(cartlist && cartlist[0]) {
            return cartlist[0][0].price.charAt(0) + cartlist.reduce((acc,item) => {
                return acc+(parseInt(item[0].price.substring(1),0) * item[1])
            }, 0)
        } else return ""
    }

useEffect(() => {
    console.log("Cart: ",cartlist);
    console.info("Total Price: ", totalPrice());
}, [cartlist]);
switch(cartlist.length) {
    case 0:
        return (
            <View style={cart.empty_body}>
                <Icon name="cart-minus" size={55} color={THEME.alt_text}/>
                <Text style={cart.empty_text}>Your cart is empty :(</Text>
            </View>
        )
    default:
        return (
                <View style={cart.body}>
                    <Text style={cart.head}>Order</Text>
                    <Seperator/>
                    <View style={cart.column_header_section}>
                        <Text style={[cart.column_header,{textAlign: 'center'}]}>Item</Text>
                        <Text style={cart.column_header}>Quantity</Text>
                        <Text style={cart.column_header}>Amount</Text>
                    </View>
                    <Seperator/>
                    <FlatList
                        data={cartlist}
                        keyExtractor={i=>i[0].id}
                        renderItem={({item,index}) => (
                            <View style={cart.card_body}>
                                <Text style={cart.card_rcp_name}>{item[0].name}</Text>
                                <Text style={cart.card_rcp_qty}>{item[1]}</Text>
                                <Text style={cart.card_price}>{item[0].price}</Text>
                            </View>
                        )}
                    />
                    <Seperator/>
                    <View style={cart.total_section}>
                        <Text style={cart.head_total}>Total</Text>
                        <Text style={cart.price_total}>{totalPrice()}</Text>
                    </View>
                    <Seperator/>
                    <View style={cart.actions_section}>
                        <Pressable 
                            onPress={_ => {
                                Alert.alert("WARNING", "This will delete all items in cart.\nProceed anyway?", [
                                    {
                                        text: "CANCEL",
                                        onPress: () => {},
                                        style: 'cancel',
                                    },
                                    {
                                        text: "YES",
                                        onPress: () => dispatch$cart({do: 'deleteAll', payload: ""}),
                                        style: 'destructive',
                                    }
                                ])
                                
                            }} 
                            style={[cart.action_button,{borderColor: "crimson", backgroundColor: "crimson"}]}
                        >
                            <Feather style={cart.action_action_icon} name="trash-2"/>
                            <Text style={cart.action_action_label}>Clear</Text>
                        </Pressable>
                        <Pressable style={[cart.action_button,{ borderColor: "green", backgroundColor: "green"}]}>
                            <FontAwesome5 style={cart.action_action_icon} name="check"/>
                            <Text style={cart.action_action_label}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            )
    }
}

export default Cart;