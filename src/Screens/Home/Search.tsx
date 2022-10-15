import React, {useState} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Light, Dark } from '../../assets/theme'

const search = StyleSheet.create({
	box: {
		flex: .1,
		width: "50%",
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 40,
		backgroundColor: Light.base,
		color: Light.text,
	}
});

const Search = () => {
    const [query, setQuery] = useState('');

	return(
		<TextInput 
			placeholder='Enter food item'
			placeholderTextColor='gray'
			onChangeText={t => setQuery(t)}
			defaultValue={query}
			style={search.box}
		/>
	);
}

export default Search;
