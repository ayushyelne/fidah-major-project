import React, {type PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './Screens/Home/Home';
import Editor from './Screens/Recipe/Editor/Editor';
import Viewer from './Screens/Recipe/Viewer/Viewer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Nutrition from './Screens/Nutrition/Nutrition';
import Cart from './Screens/Cart/Cart';
import Recipe from './Screens/Recipe/recipe';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const tabScreenOptions = {
	headerShown: false,
	tabBarActiveTintColor: 'orange',
	tabBarInActiveTintColor: 'white',
	tabBarLabelStyle: { fontWeight: "bold" } ,
	tabBarStyle: { 
		backgroundColor: Colors.darker,
		borderTopWidth: 0,
		position: 'absolute',
	},
}

// Cart
export const CheckoutList = React.createContext<Recipe[]>([]);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    width: Dimensions.get('window').width,
    maxWidth: Dimensions.get('window').width,
	  justifyContent: "space-between",
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Tab.Navigator 
			sceneContainerStyle={{ backgroundColor: backgroundStyle.backgroundColor } } 
			screenOptions={tabScreenOptions}>
          <Tab.Screen 
            name="Home" 
            // children={()=><Viewer recipe={Recipe.mock()} />}
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Nutrition" 
            component={Nutrition}
            options={{
              tabBarLabel: "Nutrition",
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="chart-pie" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Cart" 
            component={Cart}
            options={{
              tabBarLabel: "Cart",
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
          { /*<Tab.Screen name="Account" component={}/> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
