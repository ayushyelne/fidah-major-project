import { StyleSheet } from "react-native";
import THEME from "assets/theme";
import { dbgBorders, FONT, randomColor } from "../../../../../../assets/theme";

const notDBG: boolean = true;

const card = StyleSheet.create({
	frame: {
		marginHorizontal: "2%",
		flex: 1,
		padding: "3%",
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
		marginVertical: "8%",

		...dbgBorders(notDBG)
	},
	desc: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-evenly",

		// ...dbgBorders(false)
	},
	name: {
		flex: 0,
		color: "white",
		marginVertical: "3%",
		// fontSize: 19,
		// alignSelf: "center",
	},
	rating: {
		color: "gold",
		marginVertical: "4%",
	},
	price: {
		flex: 0,
		fontFamily: FONT.monospace_alt.medium,
		marginVertical: "4%",
		fontSize: 19,
	},
	cart: {
		alignSelf: 'flex-end',
		position: 'absolute',
		bottom: "0%",
		right: "0%",
		backgroundColor: THEME.accent,
		padding: "5%",
		borderRadius: 5,
		borderTopRightRadius:0,
		borderBottomLeftRadius:0,
		borderBottomRightRadius: 19,
		justifyContent: "center",
		alignItems: "center",
	},
	cart_icon: {
		color: THEME.base,
		fontSize: 19,
		// marginRight: "2%",
	},
});

export default card;
