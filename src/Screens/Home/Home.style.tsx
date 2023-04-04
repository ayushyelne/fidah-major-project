import {StyleSheet} from 'react-native';
import THEME from 'assets/theme';

const listing = StyleSheet.create({
	container: {
		flex: .3,
		borderWidth: 1,
		borderColor: "magenta",
		backgroundColor: THEME.base,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 5,
		// borderRadius: 10,
	},
})

const search = StyleSheet.create({
	box: {
		flex: .1,
		width: "50%",
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 40,
		backgroundColor: THEME.base,
		color: THEME.text,
	}
});

export { listing, search }
