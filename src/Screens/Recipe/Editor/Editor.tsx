import React from "react";
import { View, Image } from "react-native";
import Recipe from "../recipe";

import editor from "./Editor.style";


const Editor = (
	_: { recipe: Recipe, }) => {
	return(
		<View style={editor.body}>
			<Image style={
				{ width: "50%", height: "40%" }
			} source={{ uri: _.recipe.img }}/>
		</View>
	);
}

export default Editor;
