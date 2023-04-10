import React from 'react';
import Banner from './Banner';
import Listings from './Listing';
import Search from './Search';
import Editor from '../Recipe/Editor/Editor';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homepage, homeStackOpts } from './Home.style.tsx';

const Stack = createNativeStackNavigator();

const Home = () => {
	return(
	  <Stack.Navigator >
		<Stack.Screen options={homeStackOpts} name="homepage" component={Homepage}/>
		<Stack.Screen options={homeStackOpts} name="editor" component={Editor}/>
	  </Stack.Navigator>
	);
}

const Homepage = () => {
	return(
	<View style={homepage.body}>
	  <Search/>
	  <Listings/>
	</View>
	);
}

export default Home;
