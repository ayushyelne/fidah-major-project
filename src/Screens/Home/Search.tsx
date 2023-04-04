import React, {useState} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import THEME from 'assets/theme';

const search = StyleSheet.create({
	box: {
		flex: .1,
		fontFamily: 'Ballet Harmony',
		width: "90%",
		margin: "1%",
		alignSelf: "center",
		paddingVertical: -1,
		fontStyle: 'italic',
		textAlignVertical: 'center',
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 30,
		borderWidth: .1,
		borderColor: 'silver',
		backgroundColor: 'rgba(40,40,40,0.8)',
		color: THEME.text,
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
