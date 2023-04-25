import React from "react";
import { View, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Recipe from "../recipe";

import editor from "./Editor.style";


const Editor = (
	{ recipe }: {recipe?: Recipe}) => {

	// ╔═╗╔╦╗╦╔╦╗
	// ║╣  ║║║ ║ 
	// ╚═╝═╩╝╩ ╩
	if(recipe) {
		return(
			<View style={editor.body}>
				<Image style={
					{ width: "50%", height: "40%" }
				} source={{ uri: recipe.img }}/>
			</View>
		);
	}
	// ╔═╗╦═╗╔═╗╔═╗╔╦╗╔═╗
	// ║  ╠╦╝║╣ ╠═╣ ║ ║╣ 
	// ╚═╝╩╚═╚═╝╩ ╩ ╩ ╚═╝
	else {
		return (
			<View style={editor.body}>

				{/*TODO: Image Uploader*/}

				{/* Name */}
				<TextInput style={editor.head} placeholder="Recipe name" placeholderTextColor="dimgray"/>
				{/* TODO: Make this foldable section into a component */}
				<Text style={editor.section_head}>Ingredients</Text>
			</View>
		)
	}
}

const DynamicList = (
		{list,type}: { list: string[], type: 'none' | '1' }
	) => {
		return(
			<View></View>
		)
}

export default Editor;
