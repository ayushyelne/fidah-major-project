import React, { useContext, useState } from "react";
import { View, Image, Text, Platform, UIManager, LayoutAnimation, TouchableOpacity, Pressable, ScrollView, Modal, Button, TextInputBase } from "react-native";
import { FlatList, TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import Recipe from "../recipe";

import viewer from "./Viewer.style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SetActiveRecipe } from "../../Home/Home";

(Platform.OS === 'android')
? (UIManager.setLayoutAnimationEnabledExperimental) 
	? UIManager.setLayoutAnimationEnabledExperimental(true)
	: null
: null

interface NuQuant {
	n: string,
	q: string,
}

const Viewer = (
	{ recipe, nvg } : {recipe: Recipe, nvg: NativeStackNavigationProp<any> }) => {
		// console.log("Recipe is: ",recipe);
		const setActiveRecipe = useContext(SetActiveRecipe);
		const [open$1, setOpen$1] = useState(false);
		const [open$2, setOpen$2] = useState(false);
		const onPress$1 = () => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setOpen$1(!open$1);
		};
		const onPress$2 = () => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setOpen$2(!open$2);
		};

		const macroNu: NuQuant[] = [
			{
				n: "Protein",
				q: recipe.n_values.protein.toString(),
			},
			{
				n: "Carbohydrates",
				q: recipe.n_values.carbs.toString(),
			},
			{
				n: "Fats",
				q: recipe.n_values.fats.toString(),
			},
			{
				n: "Vitamins",
				q: recipe.n_values.portion.toString(),
			},
		]

		const [isNmodalVisible, setNmodalVisible] = useState(false);
		const microNu: NuQuant[]  =
			recipe.n_values.micro.map((val) => { 
				return { n: val[0], q: val[1].toString() } 
			});
		const [micNuList, setMicNuList] = useState(microNu);
	return(
		<View style={viewer.body}>
			<Image style={viewer.image} source={{ uri: recipe.img }}/>
			<View style={viewer.twocolumn}>
				<Text style={
					(open$1 || open$2)
					? viewer.header$small
					: viewer.header
				}>{recipe.name}</Text>
				<Pressable onPress={() => {
					console.log("Nmodal: " + (isNmodalVisible) ? "open" : "close");
					setNmodalVisible(!isNmodalVisible)
				}}>
					<Icon  name="chart-pie" size={19} color="#FFF"/>
				</Pressable>
			</View>
            <View style={viewer.twocolumn}> 
                <Text style={viewer.author}>{recipe.author}</Text>
                <Text style={viewer.time}>{recipe.prep_time.toString()}</Text>
            </View>
			{/* Collapsable sections */}

			{/* Steps */}
			<Pressable style={viewer.section_header_container} onPress={onPress$1}>
				<Text style={viewer.section_header}>How its made..</Text>
			</Pressable>
			<ScrollView style={
			(open$1) 
				? viewer.stp_container$expanded
				: viewer.stp_container$collapsed
			}>
				{
					recipe.steps.map((stp,idx) => {
						return <Text key={idx} style={viewer.steps}>
							<Text style={viewer.idx}>{idx+1}. </Text>
							{stp}
							</Text>
					})
				}
			</ScrollView>

			{/* Ingredients */}
			<Pressable style={viewer.section_header_container} onPress={onPress$2}>
				<Text style={viewer.section_header}>Ingredients..</Text>
			</Pressable>
			<ScrollView style={
			(open$2) 
				? viewer.stp_container$expanded
				: viewer.stp_container$collapsed
			}>
				{
					recipe.ingredients.map((stp,idx) => {
						return <Text key={idx} style={viewer.steps}>
							<Text style={viewer.idx}>{idx+1}. </Text>
							{stp[0]+"("+stp[1]+")"}
							</Text>
					})
				}
			</ScrollView>

			<Modal 
				visible={isNmodalVisible}
				onRequestClose={() => setNmodalVisible(!isNmodalVisible)}
				animationType="fade"
				transparent={true}
				style={viewer.n_modal}
			>
				<Pressable 
					style={{flex: 1,}} 
					onPressOut={() => setNmodalVisible(false)}
				>
					<View
						onStartShouldSetResponder={(_) => {
							return nativeEvent.touches.length == 1;
						}}
						onResponderRelease={(_) => {
							if (target == currentTarget) {
								this.props.onCancel()
							}
						}}
						style={viewer.n_body}
					>
						{/*Head*/}
						<View style={viewer.n_head}>
							<Text style={viewer.n_q2}>{recipe.n_values.calories.toString()}</Text>
							<Text>per</Text>
							<Text style={viewer.n_q2}>{recipe.n_values.portion.toString()}</Text>
						</View>
						{/*Macro Grid*/}
						<FlatList
							numColumns={2}
							data={macroNu}
							contentContainerStyle={viewer.n_macro_grid}
							keyExtractor={card => card.n}
							renderItem={({item}) => (
								<View style={viewer.n_macro_card}>
									<Text style={viewer.n_q1}>{item.q}</Text>
									<Text style={viewer.n_card_label}>{item.n}</Text>
								</View>
							)}
						/>
						{/*Micro's list*/}
						{/* <View style={viewer.n_micro_list}> </View> */}
						<TextInput 
							style={viewer.n_filter}
							placeholder="search micronutrient..."
							maxLength={10}
							onChangeText={(text) => setMicNuList(microNu.filter(nq => nq.n.toLowerCase().includes(text.toLowerCase()) ) )}
						/>
						<FlatList
							data={micNuList}
							keyExtractor={item => item.n}
							contentContainerStyle={viewer.n_micro_list}
							renderItem={({item}) => (
								<View style={viewer.n_micro_list_item}>
									<Text>{item.n}</Text>
									<Text>{item.q}</Text>
								</View>
							)}/>
					</View>
				</Pressable>
			</Modal>
			<Pressable onPress={() => {
				nvg.push('editor');
				if(setActiveRecipe) setActiveRecipe(recipe.id);
			}} style={viewer.fab_edit}>
				<Feather name="edit" style={viewer.fab_edit_icon}/>
			</Pressable>
		</View>
	);
}

					// <View style={viewer.n_macro_grid}>
					// 	{/* Protein */}
					// 	<View style={viewer.n_macro_card}>
					// 		<Text style={viewer.n_q1}>{recipe.n_values.protein}</Text>
					// 		<Text style={viewer.n_card_label}>Protein</Text>
					// 	</View>
					// 	{/* Carbs */}
					// 	<View style={viewer.n_macro_card}>
					// 		<Text style={viewer.n_q1}>{recipe.n_values.carbs}</Text>
					// 		<Text style={viewer.n_card_label}>Carbohydrates</Text>
					// 	</View>
					// 	{/* Fats */}
					// 	<View style={viewer.n_macro_card}>
					// 		<Text style={viewer.n_q1}>{recipe.n_values.fats}</Text>
					// 		<Text style={viewer.n_card_label}>Fats</Text>
					// 	</View>
					// 	{/* Vitamins */}
					// 	<View style={viewer.n_macro_card}>
					// 		<Text style={viewer.n_q1}>{recipe.n_values.portion}</Text>
					// 		<Text style={viewer.n_card_label}>Vitamins</Text>
					// 	</View>
					// </View>
export default Viewer;