import React, { createContext } from 'react';
import Banner from './Banner';
import Listings from './Listing';
import Search from './Search';
import Editor from '../Recipe/Editor/Editor';
import Viewer from '../Recipe/Viewer/Viewer';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homepage, homeStackOpts } from './Home.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

const Stack = createNativeStackNavigator();

const Home = () => {
	return(
	  <Stack.Navigator >
		<Stack.Screen options={homeStackOpts} name="homepage" component={Homepage}/>
		<Stack.Screen 
			options={homeStackOpts} 
			name="viewer" 
			component={Viewer}
		/>
	  </Stack.Navigator>
	);
}

const Homepage = ({navigation}: {navigation: NativeStackNavigationProp<any>}) => {
	return(
	<View style={homepage.body}>
	  <Search/>
	  <Listings navigation={navigation}/>
	</View>
	);
}

export default Home;