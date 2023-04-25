import THEME from "assets/theme";
import { StyleSheet } from "react-native";
import { dbgBorders } from "../../assets/theme";

const notDBG = true;

const nutrition = StyleSheet.create({
    body: {
        flex: 1,

        ...dbgBorders(notDBG)
    },
    search: {
        margin: "5.5%",
        padding: 20,
        backgroundColor: THEME.alt_base,
        color: THEME.text,
        borderRadius: 10,

        ...dbgBorders(notDBG)
    },
    list: {
        flex: 1,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "5.5%",
        // backgroundColor: THEME.alt_base,
        // borderRadius: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: THEME.text,
        borderStyle: "dashed",
        margin: ".451%",

        // ...dbgBorders(notDBG)
    },
    text: {
        fontSize: 19,
        fontWeight: "bold",
        color: THEME.text,
        ...dbgBorders(notDBG)
    },
    icon: {
        fontSize: 37,
        ...dbgBorders(notDBG)
    },
});

export default nutrition;