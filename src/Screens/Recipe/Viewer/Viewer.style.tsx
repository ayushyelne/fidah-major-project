import THEME from "assets/theme";
import { Dimensions, StyleSheet } from "react-native";
import { scrollTo } from "react-native-reanimated";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { randomColor } from "../../../assets/theme";


const viewer = StyleSheet.create({
	body: {
		flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingVertical: 30,
        paddingHorizontal: 10,
        overflow: "scroll",
        backgroundColor: THEME.base
		
		// Debug
		// borderWidth: 1,
		// borderColor: "cyan",
	},
    // ---- Children ----
	image: {
        flex:  .5,
        alignSelf: "stretch",
        // width: "100%",
        // height: "40%",
        borderRadius: 30,
        resizeMode: "contain",
	},
    header$small: {
        fontWeight: "bold",
        fontSize: 28,
    },
    header: {
        fontWeight: "bold",
        fontSize: 37,
    },
    twocolumn: {
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",

        // flex: .4,
        // flexShrink: 1,
        //dbg
        // borderWidth: 1,
        // borderColor: randomColor(),
    },
    author: {
        fontStyle: "italic",
    },
    time: {
        color: "gray"
    },
    section_header_container: {
        flex: 0,
        flexShrink: 1,
        padding: "2%",
        // borderRadius: 10,
        backgroundColor: "#303030",
    },
    section_header: {
        flex: 0,
        flexShrink: 1,
        alignContent: "stretch",
        fontSize: 28,
        fontWeight: "bold",

        // //dbg
        // borderWidth: 1,
        // borderColor: randomColor(),
    },
    stp_container$collapsed: { 
        display: 'none',
        opacity: 0,
    },
    stp_container$expanded: {
        flex: 1.5,
        alignSelf: "stretch",
        opacity: 100,
    },
    steps: {
        color: "gray",
        // flex: 1,
        // padding: 10,
        // //dbg
        // borderWidth: 2,
        // borderColor: randomColor(),
    },
    idx: {fontWeight: "bold"},

    //----------- 
    // Modal
    //----------- 

    n_modal: {
        // margin: 30,
    },
    n_body: {
        backgroundColor: "dimgray",
        flex: 0,
        flexDirection: "column",
        alignContent: "stretch",
        margin: "10%",
        padding: "3%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "silver",
    },
    n_head:{
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    n_q1: { 
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: "center",
    },
    n_q2: { 
        fontWeight: "bold",
        fontSize: 19,
    },
    n_q3: { 
        fontWeight: "bold",
        fontSize: 10,
    },
    n_macro_grid: {
        justifyContent: "center",
        alignItems: "center",
    },
    n_macro_card: {
        flex: 0,
        justifyContent: "space-evenly",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",

        borderWidth: 1,
        borderColor: THEME.text,
        padding: "8%",
    },
    n_card_label: { 
        fontWeight: "bold",
        fontSize: 10,
        alignSelf: "center",
    },
    n_micro_list: {
    },
    n_micro_list_item: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",

        //dbg
        // borderWidth: .5,
        // borderColor: randomColor(),
    },
    n_filter: {
        color: THEME.alt_text,
        fontSize: 10,
        fontStyle: "italic",
        
    },
    fab_edit: {
		justifyContent: "center",
		alignItems: "center",
		position: 'absolute',
		alignSelf: 'flex-end',
		bottom: "3%",
		right: "5%",
		padding: "5%",
		borderRadius: 100,
        borderWidth: .5,
        borderStyle: 'dotted',
        borderColor: THEME.alt_text,
		backgroundColor: THEME.accent,
    },
    fab_edit_icon: {
		fontSize: 28,
        color: THEME.base,
    },
});

export default viewer;
