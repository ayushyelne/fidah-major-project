import THEME from "assets/theme";
import { StyleSheet } from "react-native";
import { dbgBorders } from "../../../assets/theme";

const notDBG: boolean = false;

const editor = StyleSheet.create({
	body: {
		flex: 10,
		backgroundColor: THEME.base,
		...dbgBorders(notDBG)
	},
	image: {
	},
	head: {
        fontWeight: "bold",
        fontSize: 37,
	},
	section_head: {
        flex: 0,
        flexShrink: 1,
        alignContent: "stretch",
        fontSize: 28,
        fontWeight: "bold",
	},
	// ...
});

export default editor;
