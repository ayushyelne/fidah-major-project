import { StyleSheet } from "react-native";
import THEME from "assets/theme";
import { dbgBorders, randomColor } from "../assets/theme";

const notDBG: boolean = true;

const card = StyleSheet.create({
	frame: {
		marginHorizontal: "2%",
		flex: 1,
		padding: 10,
		justifyContent: "flex-start",
		alignContent: "space-between",
		alignItems: "flex-start",
		backgroundColor: THEME.alt_base,
		borderRadius: 19,

		...dbgBorders(notDBG)
	},
	image: {
		flex: 0,
		resizeMode: 'cover',
		objectFit: 'contain',
		width: "98%",
		height: "50%",
		alignSelf: "center",
		borderRadius: 19,

		...dbgBorders(notDBG)
	},
	info: {
		flex: 0,
		fontSize: 10,
		textTransform: 'lowercase',
		letterSpacing: 1,
		backgroundColor: THEME.text,
		color: THEME.alt_base,
		borderRadius: 5,
		paddingVertical: "3%",
		paddingHorizontal: "6%",
		textAlignVertical: "center",
		marginVertical: "4%",

		...dbgBorders(notDBG)
	},
	desc: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignContent: "stretch",
		alignItems: "stretch",

		...dbgBorders(notDBG)
	},
	name: {
		flex: 0,
		color: "white",
		// fontSize: 19,
		// alignSelf: "center",
	},
	rating: {
		color: "gold",
	},
	price: {
		flex: 0,
		fontWeight: "bold",
		fontSize: 19,
	},
});

export default card;
