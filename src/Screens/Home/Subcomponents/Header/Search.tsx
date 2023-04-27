import React, {useState} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import THEME from 'assets/theme';
import { dbgBorders } from '../../../../assets/theme';

const search = StyleSheet.create({
	box: {
		// flex: .1,
		flex: 0,
		flexDirection: 'row',
		margin: "3%",
		marginVertical: "5%",
		alignSelf: "stretch",
		textAlignVertical: 'center',
		paddingHorizontal: '5%',
		paddingVertical: '2%',
		// borderWidth: 1,
		// borderColor: 'silver',
		borderRadius: 10,
		// backgroundColor: 'rgba(40,40,40,0.8)',
		backgroundColor: THEME.alt_base,
		color: THEME.text,

		// ...dbgBorders(false)
	}
});

const Search = () => {
    const [query, setQuery] = useState('');

	return(
		<TextInput 
			placeholder='Search here...'
			placeholderTextColor={THEME.alt_text}
			onChangeText={t => setQuery(t)}
			defaultValue={query}
			style={search.box}
		/>
	);
}

export default Search;
