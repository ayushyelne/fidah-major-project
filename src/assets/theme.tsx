/*
 ████████╗██╗  ██╗███████╗███╗   ███╗███████╗
╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝
   ██║   ███████║█████╗  ██╔████╔██║█████╗  
   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  
   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ */

import { Colors } from 'react-native/Libraries/NewAppScreen';

// Core type for all colorschemes
interface Colorscheme {
		base: string;
		accent: string;
		text: string;
		alt_text: string;
}

const ACCENT: string = "#27ae60";

export function randomColor(): string {
	const COLORS: [number,Array<string>] = 
		[ 6, 
		 [
			"red", 
			"cyan",
			"magenta",
			"lime",
			"orangered",
			"teal"
		 ]
		]

	return COLORS[1][Math.floor(Math.random()*COLORS[0] )]
}

const Light: Colorscheme = {
	base : Colors.lighter,
	// accent : "#ff3c38",
	accent : ACCENT,
	text : "black",
	alt_text: "white",
}
const Dark: Colorscheme = {
	base : Colors.darker,
	accent : ACCENT,
	text : "white",
	alt_text: "silver",
}

const THEME: Colorscheme = Dark;

// export { Light, Dark };
export default THEME;
