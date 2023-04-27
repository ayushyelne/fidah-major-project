import THEME from "assets/theme";
import { StyleSheet } from "react-native";
import { dbgBorders } from "../../../assets/theme";

const notDBG: boolean = false;

const editor = StyleSheet.create({
	body: {
		flex: 10,
		backgroundColor: THEME.base,
		padding: "2%",
		overflow: "scroll",
		position: 'relative',
		// marginBottom: "2%",
		// ...dbgBorders(notDBG)
	},
	image_section: {
		flex: 0,
		// minHeight: "10%",
        alignSelf: "stretch",
        borderRadius: 30,
        resizeMode: "cover",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		...dbgBorders(false),
	},
	image_section_image: {
		height: "100%",
        alignSelf: "stretch",
        borderRadius: 30,
        resizeMode: "cover",
	},
	image_sub_section: {
		padding: "5%",
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	image_add_edit: {
		flex: 0,
		padding: "2%",
		backgroundColor: THEME.accent,
		borderRadius: 20,
		borderWidth:1,
		marginHorizontal: "3%",
	},
	image_add_edit_icon: {
		color: THEME.base,
		fontSize: 19
	},
	image_delete: {
		flex: 0,
		padding: "2%",
		backgroundColor: THEME.accent,
		borderWidth:1,
		borderRadius: 20,
	},
	image_delete_icon: {
		color: THEME.base,
		fontSize: 19
	},
	head: {
        fontWeight: "bold",
        fontSize: 37,
	},
	section_head: {
        flex: 0,
        // flexShrink: 1,
        alignContent: "stretch",
        fontSize: 28,
        fontWeight: "bold",
		marginHorizontal: "3%",
		paddingBottom: "2%",
		borderBottomWidth: 1,
		borderBottomColor: THEME.text,
		borderStyle: "dotted",
	},

	list_container: {
		marginVertical: "2%",
		// ...dbgBorders(notDBG)
	},
	list_item_super_container: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
	},
	list_item_container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: THEME.alt_base,
		margin: "1%",
		marginHorizontal: "3%",
		padding: "1%",
		borderRadius: 10,

	},
	list_item: {
		flex: 1,
		marginHorizontal: "2%",
	},
	list_idx: {
		fontWeight: 'bold',
		flex: 0,
	},
	list_add: {
		justifyContent: "center",
		alignItems: "center",
		flex: 0,
		marginVertical: "2%",
		alignSelf: 'center',
		// padding: "3%",
		borderRadius: 20,
		backgroundColor: THEME.text,
	},
	list_remove: {
		justifyContent: "center",
		alignItems: "center",
		flex: 0,
		alignSelf: 'center',
		padding: "2%",
		borderRadius: 10,
		// backgroundColor: "crimson",
	},
	list_add_icon: {
		fontSize: 28,
		color: THEME.alt_base,
	},
	list_remove_icon: {
		fontSize: 28,
		color: "crimson",
	},

	n_section: {
		flex: 0,
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
		alignContent: "center",
		textAlignVertical: "center",
        paddingHorizontal: "2%",
		borderBottomWidth: 1,
		borderBottomColor: THEME.text,
		borderStyle: "dotted",
	},
	n_sync_icon: { 
		fontSize: 25,
		alignSelf: "center",
		color: "limegreen",
	},
	fab_save: {
		justifyContent: "center",
		alignItems: "center",
		position: 'absolute',
		alignSelf: 'flex-end',
		bottom: "2%",
		right: "5%",
		padding: "5%",
		borderRadius: 100,
        borderWidth: .5,
        borderStyle: 'dotted',
        borderColor: THEME.alt_text,
		backgroundColor: THEME.accent,
	},
	fab_save_icon: {
		fontSize: 28,
        color: THEME.base,
	},
}
);

export default editor;
