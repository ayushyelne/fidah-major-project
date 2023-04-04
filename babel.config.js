module.exports = {
  "presets": ['module:metro-react-native-babel-preset'],
	"plugins": [
	  ["module-resolver", {
	  "root": [
		"./src"
	  ],
	  "alias": {
		"assets": "./src/assets",
		"screens": "./src/Screens",
		"home": "./src/Screens/Home",
		"nutrition": "./src/Screens/Nutrition",
		"components": "./src/Components"
	  }
	}]
	],
};
