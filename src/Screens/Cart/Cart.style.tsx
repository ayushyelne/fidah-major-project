import { StyleSheet } from "react-native";
import THEME, { dbgBorders, FONT } from "../../assets/theme";

const cart = StyleSheet.create({
    empty_body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
    },
    empty_text: {
        fontSize: 10,
        color: THEME.alt_text,
        fontStyle: "italic",
    },
    body: {
        padding: "2%",
        flex: 1,
    },
    head:{
        fontSize: 28,
        marginHorizontal: "3%",
        fontFamily: FONT.monospace.bold,
    },
    column_header_section:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: "3%",
        // ...dbgBorders()
     },
    column_header:{
        fontSize: 10,
        flex: 1,
        textAlign: 'right',
        color: THEME.alt_text,
        fontFamily: FONT.monospace.bold,
     },
    card_body: {
        padding: "3%",
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
    },
    card_rcp_name: {
        flex: 1,
        fontFamily: FONT.monospace.medium,
     },
    card_rcp_qty: {
        flex: 1,
        textAlign: 'right',
        fontFamily: FONT.monospace.light,
    },
    card_price: {
        flex: 1,
        textAlign: 'right',
        // marginHorizontal: "3%",
        fontFamily: FONT.monospace.light,
     },
    total_section: {
        padding: "3%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    head_total: {
        fontSize: 19,
        flex: 1,
        textAlign: 'right',
        paddingHorizontal: "3%",
        fontFamily: FONT.monospace.bold,
        // ...dbgBorders()
    },
    price_total: {
        fontSize: 19,
        fontFamily: FONT.monospace.medium ,
        marginHorizontal: "5%",
    },
    actions_section:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    action_button: {
        flex: 1,
        padding: "2%",
        marginHorizontal: "2%",
        borderWidth: 0,
        borderRadius: 10,
        borderStyle: 'dashed',
        fontSize: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    action_action_icon: { 
        fontSize: 22,
        marginHorizontal: "4%",
        color: THEME.base,
    },
    action_action_label: {
        fontSize: 19,
        flex: 1,
        marginHorizontal: "4%",
        textAlign: 'left',
        color: THEME.base,
        fontFamily: FONT.monospace.medium,
        // ...dbgBorders()
    },
    seperator: {
        height: 1,
        marginHorizontal: "3%",
        marginVertical: "2%",
        borderBottomWidth: 1,
        borderBottomColor: THEME.text,
        borderStyle: 'dashed',
    }
})

export default cart;