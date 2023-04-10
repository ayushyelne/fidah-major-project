import THEME from "assets/theme";
import { StyleSheet } from "react-native";
import { randomColor } from "../../../assets/theme";


const viewer = StyleSheet.create({
	body: {
		flex: 10,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
        paddingVertical: 30,
        paddingHorizontal: 10,
		
		// Debug
		// borderWidth: 1,
		// borderColor: "cyan",
	},
	image: {
        width: "100%",
        height: "40%",
        borderRadius: 30,
        objectFit: "fill",
	},
    header: {
        fontWeight: "bold",
        fontSize: 37,
    },
    twocolumn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "stretch",
        overflow: "visible",
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
    section: {
        flex: 5,
        flexDirection: "column",
        flexWrap:"nowrap",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "baseline",

        //dbg
        borderWidth: 1,
        borderColor: randomColor(),
    },
    section_header: {
        // display: "none",
        backgroundColor: "#303030",
        fontSize: 28,
        fontWeight: "bold",

        //dbg
        borderWidth: 1,
        borderColor: randomColor(),
    },
    stp_container: { 
        borderWidth: 1,
        borderColor: randomColor(),
    },
    steps: {
        color: "gray",
        // flex: 1,
        // padding: 10,
        //dbg
        borderWidth: 2,
        borderColor: randomColor(),
    },
    idx: {fontWeight: "bold"},
	// ...
});

export default viewer;
