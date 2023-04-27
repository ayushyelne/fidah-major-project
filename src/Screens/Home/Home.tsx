import React, { createContext, useContext, useState } from 'react';
import Banner from './Subcomponents/Header/Banner';
import Listings from './Subcomponents/Listing/Listing';
import Search from './Subcomponents/Header/Search';
import Editor from '../Recipe/Editor/Editor';
import Viewer from '../Recipe/Viewer/Viewer';
import { Pressable, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homepage, homeStackOpts } from './Home.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import Recipe from '../Recipe/recipe';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

export const SetActiveRecipe = createContext<React.Dispatch<React.SetStateAction<string>>|null>(null);

const Home = () => {
	const [recipeID, setRecipeID] = useState("##");
	return(
		<SetActiveRecipe.Provider value={setRecipeID}>
			<Stack.Navigator >
				<Stack.Screen options={homeStackOpts} name="homepage" component={Homepage}/>
				<Stack.Screen 
					options={homeStackOpts} 
					name="viewer" 
					children={(nvg) => <Viewer nvg={nvg.navigation} recipe={Recipe.fromID(recipeID)}/>}
				/>
				<Stack.Screen
					options={homeStackOpts}
					name="creator"
					component={Editor}
				/>
				<Stack.Screen
					options={homeStackOpts}
					name="editor"
					children={() => (<Editor recipe={Recipe.fromID(recipeID)}/>)}
				/>
			</Stack.Navigator>
		</SetActiveRecipe.Provider>
	);
}

const Homepage = ({navigation}: {navigation: NativeStackNavigationProp<any>}) => {
	return(
	<View style={homepage.body}>
	  <Search/>
	  <Listings navigation={navigation}/>
		<Pressable style={homepage.fab} onPress={() => navigation.push("creator")}>
			<MaterialIcons style={homepage.fab_icon} name="edit"/>
		</Pressable>
	</View>
	);
}

export default Home;