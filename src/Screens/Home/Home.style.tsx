import {StyleSheet} from 'react-native';
import THEME from 'assets/theme';
import { dbgBorders } from '../../assets/theme';

const notDBG: boolean = false;

const homeStackOpts = {
	headerShown: false,
}

const homepage = StyleSheet.create({
	body: {
		flex: 10,
		backgroundColor: THEME.base,
	},
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
