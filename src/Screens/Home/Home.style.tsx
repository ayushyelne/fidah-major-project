import {StyleSheet} from 'react-native';
import THEME from 'assets/theme';
import { dbgBorders } from '../../assets/theme';

const notDBG: boolean = true;

const homeStackOpts = {
	headerShown: false,
}

const homepage = StyleSheet.create({
	body: {
		flex: 10,
		backgroundColor: THEME.base,
	},
	fab: {
		justifyContent: "center",
		alignItems: "center",
		position: 'absolute',
		alignSelf: 'flex-end',
		bottom: "8%",
		right: "5%",
		padding: "5%",
		borderRadius: 100,
		backgroundColor: THEME.alt_base,
	},
	fab_icon: {
		fontSize: 28,
	}
});

const listing = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.base,

		...dbgBorders(notDBG)
	},
})

const search = StyleSheet.create({
	box: {
		flex: 0,
		// width: "50%",
		// paddingLeft: 30,
		// paddingRight: 30,
		borderRadius: 40,
		backgroundColor: THEME.base,
		color: THEME.text,
	}
});

export { listing, search, homeStackOpts, homepage };
