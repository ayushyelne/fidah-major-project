import React, { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { View, Image, Text, Pressable, Platform, UIManager, LayoutAnimation, ImageBackground } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Recipe from "../recipe";

import editor from "./Editor.style";
import { CameraOptions, launchCamera, launchImageLibrary } from "react-native-image-picker";

(Platform.OS === 'android')
? (UIManager.setLayoutAnimationEnabledExperimental) 
	? UIManager.setLayoutAnimationEnabledExperimental(true)
	: null
: null

let imgPickerOptions: CameraOptions = {
	mediaType: "photo",
	quality: 1
}
const launchCam = () => { launchCamera(imgPickerOptions, rsp => {
	if(rsp.didCancel) {
		console.log("Cancelled");
	} else if (rsp.errorCode) {
		console.error("ERROR:: Image Picker ::" , rsp.errorCode, "::", rsp.errorMessage);
	} else {
		console.log("Done! :",rsp.assets);
	}
	} )
}
async function launchImgLib(current: string): Promise<string> { 
	let src: string = current;
	await launchImageLibrary(imgPickerOptions, rsp => {
		if(rsp.didCancel) {
			console.log("Cancelled");
		} else if (rsp.errorCode) {
			console.error("ERROR:: Image Picker ::" , rsp.errorCode, "::", rsp.errorMessage);
		} else {
			console.log("Done! :",rsp.assets);
			if(rsp.assets) {
				if(rsp.assets[0].uri) {
					console.log("URI: ", rsp.assets[0].uri);
					src = rsp.assets[0].uri 
					console.log("ImgLib.src", src);
				}
			}
		}
	})
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	return src;
}



const Editor = (
	{ recipe }: {recipe?: Recipe}) => {

		const [recipeName, setRecipeName] = useState<string>((recipe) ? recipe.name : "");
		const [inglist, dispatch$IngList] = useReducer(elReducer,[(recipe) ? recipe.ingredients : [], 2]);
		const [steplist, dispatch$StepList] = useReducer(elReducer,[(recipe) ? recipe.steps.map(i => [i]) : [],1]);
		const [nutriList, dispatch$NutriList] = useReducer(elReducer, [[],2]);

		const [imageSource, setImageSource] = useState<string>((recipe) ? recipe.img : "");
		/** ### `fetchNutrition()`
		 * TODO: Based on Ingredients make API request to auto compute the ingredients */
		const fetchNutrition = (ingredients: string[][]) => {
			// Make some API calls and shit...
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			dispatch$NutriList({
				do: 'set',
				arr: [
					["Protein", "4g"],
					["Carbohydrates", "28g"],
					["Fats", "16g"],
					["Fibre", "8.3g"],
					["Iron", "0.3g"],
					["Calcium", "0.8g"],
					["B-carotene", "1.5g"],
				]
			})
		}

		return (
			<>
			{/* <View style={editor.body} > */}
			<ScrollView style={editor.body} >
				<ImageBackground 
					style={[editor.image_section, (imageSource) ? {minHeight: "20%"} : {minHeight: "10%"}]} 
					source={{ uri: imageSource }}
					imageStyle={editor.image_section_image}
				>
					<View style={editor.image_sub_section}>
						<Pressable 
							style={editor.image_add_edit}
							onPress={() => launchImgLib(imageSource).then(val => setImageSource(val))}
						>
							<Feather style={editor.image_add_edit_icon} name={(imageSource) ? "edit" : "plus-circle"}/>
						</Pressable>
						<Pressable style={editor.image_delete} onPress={() => {
							LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
							setImageSource("")
						}}>
							<Feather name="delete" style={editor.image_delete_icon}/>
						</Pressable>
					</View>
				</ImageBackground>
				{/* Name */}
				<TextInput style={editor.head} defaultValue={recipeName} placeholder="Recipe name" placeholderTextColor="dimgray"/>
				{/* TODO: Make this foldable section into a component */}
				<Text style={editor.section_head}>Ingredients</Text>
				<EditableList listControl={[inglist,dispatch$IngList]} type='none' />
				<Text style={editor.section_head}>How its made?</Text>
				<EditableList type='1' listControl={[steplist,dispatch$StepList]} options={{multiline: true, editable: true, add_remove: true}} />
				<View style={editor.n_section}>
					<Text style={[editor.section_head, {borderBottomWidth: 0}]}>Nutrients</Text>
					<Pressable onPress={() => fetchNutrition(inglist[0])}>
						<Feather style={editor.n_sync_icon} name="file-text"/>
					</Pressable>
				</View>
				<EditableList listControl={[nutriList,dispatch$NutriList]} type='none' options={{multiline: false, scrollable: true, editable: false, add_remove: false}} />
			</ScrollView>
			{/* </View> */}
			<Pressable style={editor.fab_save} onPress={ () => {} }>
				<Feather style={editor.fab_save_icon} name="save"/>
			</Pressable>
			</>
		)
}

interface ELItem {
	idx: number,
	content: string[]
}

interface ELActions {
	do: 'add' | 'delete' | 'update' | 'set',
	dest?: [number,number] // [setIndex, ArrayIndex]
	content?: string,
	arr?: string[][]
}
function elReducer(state: [string[][], number], action: ELActions): [string[][],number] {
	switch(action.do) {
		case 'add':
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			return [[...state[0], Array(state[1]).fill("") ],state[1]]
		case 'delete':
			if(action.dest) {
				// console.log(action.dest, "Array:", state[0]);
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				if(state[0].length == 1) {
					return [[], state[1]]
				} else {
					let newArr = [...state[0]];
					newArr.splice(action.dest[0], 1);
					return [newArr, state[1]]
				}
			} else return state
		case 'update':
			if(action.dest && action.content) {
				let arr = state[0];
				arr[action.dest[0]][action.dest[1]] = action.content;
				return [arr, state[1]];
			} else return state
		case 'set':
			if(action.arr) { return [action.arr, state[1]] }
			else return state
		default:
			return state
	}
}

//    ▄████████  ▄█       
//   ███    ███ ███       
//   ███    █▀  ███       
//  ▄███▄▄▄     ███       
// ▀▀███▀▀▀     ███       
//   ███    █▄  ███       
//   ███    ███ ███▌    ▄ 
//   ██████████ █████▄▄██   Editable List :)
//              ▀         
const EditableList = (
	{listControl, type = 'none', options = { multiline: false, editable: true, add_remove: true, scrollable: false }}: 
	{ 
		listControl: [
			[string[][], number],
			React.Dispatch<ELActions>
		],
		type: 'none' | '1',
		options: {
			multiline: boolean,
			editable: boolean,
			scrollable: boolean,
			add_remove: boolean,
		}
	}) => {

		console.log("ListControl: ", [...listControl[0][0]]);
	return (
		<View style={[editor.list_container, (options.scrollable) ? {flex: 1, maxHeight:"37%"} : {flex: 0} ]}>
			<FlatList
				data={listControl[0][0]}
				keyExtractor={(_,index) => index+''}
				renderItem={({item,index}) =>
				<View style={editor.list_item_super_container}>
					{ (type=='1') ? <Text style={editor.list_idx}>{index+1 + '.'}</Text> : <></> }
					<EditableListItem options={options} idx={index} lItem={item} liDispatch={listControl[1]}/> 
				</View>
			} />
			{
			(options.add_remove) 
				?  <Pressable onPress={() => listControl[1]({do: 'add'})} style={editor.list_add}>
						<Feather style={editor.list_add_icon} name="plus-circle"/>
					</Pressable>
				: <></>
			}
		</View>
	)
}

const EditableListItem = (
	{lItem, idx, liDispatch, options}: {
		lItem: string[],
		idx: number,
		liDispatch: React.Dispatch<ELActions>,
		options: {
			multiline: boolean,
			editable: boolean,
			scrollable: boolean,
			add_remove: boolean,
		}
	}) => {
		return(
		<View style={editor.list_item_container}>
			<FlatList
				data={lItem}
				numColumns={lItem.length}
				keyExtractor={(_,idx) => idx+''}
				renderItem={({item,index}) => 
					<TextInput 
						style={editor.list_item} 
						textAlign={(index % 2 == 0) ? "left" : "right"}
						defaultValue={item}
						editable={options.editable}
						scrollEnabled={true}
						multiline={options.multiline}
						onChangeText={(txt) => {
							liDispatch({do: 'update', dest: [idx,index], content: txt})
						}}
					/> 
			}
			/>
			{(options.add_remove) 
				?  <Pressable onPress={() => liDispatch({do: 'delete', dest: [idx, 0]})} style={editor.list_remove}>
						<Feather style={editor.list_remove_icon} name="trash-2"/>
					</Pressable>
				: <></>
			}
		</View>

		)
}


export default Editor;

/* { items.map((_, idx) => <TextInput key={idx} value={_}/>) } */
/* { [...Array(fields)].map((_, idx) => <TextInput style={editor.list_item} key={idx} value={_}/>) } */

		// console.log("New:", neu, "Old:", old);
		// _setList(x => {
		// 	console.log("x: ", x);
		// 	let idxRow = x.findIndex((i) => i.content.includes(old));
		// 	console.log("idxRow: ", idxRow);
		// 	let idxCol =  x[idxRow].content.indexOf(old);
		// 	console.log("idxCol: ", idxCol);
		// 	console.log("x[idxRow].content[idxCol]: ", x[idxRow].content[idxCol] );
		// 	x[idxRow].content[idxCol] = neu;
		// 	return x


// interface DLIActions {
// 	do: 'add' | 'remove',
// 	dest: [number,number],
// 	content: {},
// }
// function LIreducer(state: Set<ListItem|unknown>, action: DLIActions ): Set<ListItem|unknown> {
// 	switch(action.do) {
// 		case 'add':
// 			return new Set([...state,
// 				 { 
// 					id: Math.random().toString(), 
// 					fields: fields, 
// 					content: Array(fields).fill("") ,
// 					// content: ["Eggs", "3"] 
// 				}]
// 			 ])
// 	}
// }

// const EditableList = (
// 		{_list,_setList, fields, type}: 
// 		{ 
// 			_list: ListItem[],
// 			_setList: Dispatch<SetStateAction<ListItem[]>>,
// 			fields: number,
// 			type: 'none' | '1' 
// 		}
// 	) => {
// 		const [list, setList] = [_list, _setList];
// 		const onAdd = () => {
// 			setList(
// 				[...list, 
// 				 { 
// 					id: Math.random().toString(), 
// 					fields: fields, 
// 					content: Array(fields).fill("") ,
// 					// content: ["Eggs", "3"] 
// 				}]
// 			);
// 			console.log("Added Item!", list);
// 		}
// 		console.log("List updated. Refreshing...", list);
// 		return(
// 			<View style={editor.list_container}>
// 				<FlatList
// 					data={list} 
// 					keyExtractor={(i) => i.id}
// 					renderItem={({item}) => <EditableListItem fields={fields} items={item} _list={list} _setList={_setList}/> }
// 				/>
// 				<Pressable onPress={onAdd} style={editor.list_add}>
// 					<FontAwesome style={editor.list_add_icon} name="plus"/>
// 				</Pressable>
// 			</View>
// 		)
// }


// interface ListItem {
// 	id: string,
// 	fields: number,
// 	content: string[]
// }

// const EditableListItem = (
// 	{fields, items, _list, _setList} : 
// 	{ 
// 		fields: number,
// 		_list: ListItem[],
// 		items: ListItem
// 		_setList: Dispatch<SetStateAction<ListItem[]>>
// 	}) => {
// 	console.log("DL.Item.content:", items);
// 	console.log("DL.Item.fields:", fields);

// 	const updateList = (neu: string, dest: [string,number]) => {
// 		console.log("New: ", neu, "Dest: [", dest[0],",",dest[1],"]");
// 		let idxRow = _list.findIndex((i) => i.id == dest[0])
// 		console.log("idxRow: ", idxRow);
// 		_list[idxRow].content[dest[1]] = neu;
// 		console.log(" Old Content(x[idxRow].content[dest[1]]) : ", _list[idxRow].content[dest[1]] );
// 		_setList(_list);
// 	}
// 	return(
// 		<View style={editor.list_item_container}>
// 			<FlatList
// 				data={items.content}
// 				numColumns={fields}
// 				keyExtractor={(_,idx) => idx+''}
// 				renderItem={({item,index}) => 
// 					<TextInput 
// 						style={editor.list_item} 
// 						value={item}
// 						onEndEditing={ev => updateList(ev.currentTarget.valueOf(),[items.id,index])}
// 					/> 
// 			}
// 			/>
// 		</View>
// 	)
// }

							// let nF = fields;
							// console.log("nF: ",nF, "index: ", index);
							// nF[index] = txt;
							// setFields(nF)

			// return [new Set([...state[0], {
			// 	idx: state[0].size + 1,
			// 	content: Array(state[1]).fill("")
			// }]), state[1]]

		// const [inglist, setIngList] = useState<ListItem[]>([]);
		// const [steplist, setStepList] = useState<ListItem[]>([]);
		// const [inglist, dispatch$IngList] = useReducer(elReducer,[new Set([{idx: 1, content: Array(2).fill("")}]), 2]);
		// const [steplist, dispatch$StepList] = useReducer(elReducer,[new Set([{idx: 1, content: Array(1).fill("")}]),1]);
		// const [inglist, dispatch$IngList] = useReducer(elReducer,[[Array(2).fill("")], 2]);
		// const [steplist, dispatch$StepList] = useReducer(elReducer,[[Array(1).fill("")],1]);

				{/* <EditableList _list={steplist} _setList={setStepList} fields={1} type="1"/> */}
				{/* <EditableList _list={inglist} _setList={setIngList}  fields={2} type="none"/> */}