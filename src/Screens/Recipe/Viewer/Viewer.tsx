import React, { useState } from "react";
import { View, Image, Text, Platform, UIManager, LayoutAnimation, TouchableOpacity, Pressable } from "react-native";
import Recipe from "../recipe";

import viewer from "./Viewer.style";

(Platform.OS === 'android')
? (UIManager.setLayoutAnimationEnabledExperimental) 
	? UIManager.setLayoutAnimationEnabledExperimental(true)
	: null
: null

const Viewer = (
	_: { recipe: Recipe, }) => {
		const [open, setOpen] = useState(false);
		const onPress = () => {
			console.log("pressed");
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setOpen(!open);
		};
	return(
		<View style={viewer.body}>
			<Image style={viewer.image} source={{ uri: _.recipe.img }}/>
            <Text style={viewer.header}>{_.recipe.name}</Text>
            <View style={viewer.twocolumn}> 
                <Text style={viewer.author}>{_.recipe.author}</Text>
                <Text style={viewer.time}>{_.recipe.prep_time.toString()}</Text>
            </View>
			<Text>{(open) ? "True" : "False"}</Text>
			<Pressable style={viewer.section} onPress={onPress}>
				<Text style={viewer.section_header}>How its made..</Text>
				<View style={[viewer.stp_container,{
					display: (open) ? 'flex' : 'flex',
				}]}>
					{
						_.recipe.steps.map((stp,idx) => {
							return (
								<View key={idx}>
									<Text key={idx} style={viewer.steps}><Text style={viewer.idx}>{idx+1}</Text>{stp}~{"\n"}</Text>
								</View>
							)
						})
					}
				</View>
			</Pressable>
		</View>
	);
}

export default Viewer;
