/*
 ████████╗██╗  ██╗███████╗███╗   ███╗███████╗
╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝
   ██║   ███████║█████╗  ██╔████╔██║█████╗  
   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  
   ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ */

import { Colors } from 'react-native/Libraries/NewAppScreen';
// ╔═╗┌─┐┬  ┌─┐┬─┐┌─┐
// ║  │ ││  │ │├┬┘└─┐
// ╚═╝└─┘┴─┘└─┘┴└─└─┘

// Core type for all colorschemes
interface Colorscheme {
		base: string;
		alt_base: string,
		accent: string;
		text: string;
		alt_text: string;
}

// const ACCENT: string = "#27ae60";
const ACCENT: string = "orange";

export function randomColor(): string {
	const COLORS: [number,Array<string>] = 
		[ 13, 
		 [
			"red", 
			"orangered",
			"darkorange",
			"cyan",
			"royalblue",
			"cadetblue",
			"paleturquoise",
			"magenta",
			"plum",
			"teal",
			"lime",
			"seagreen",
			"mediumspringgreen",
		 ]
		]

	return COLORS[1][Math.floor(Math.random()*COLORS[0] )]
}
export function dbgBorders(n?: boolean) { 
	return (n) ? {} : { borderWidth: 1, borderColor: randomColor(), borderStyle: "dashed", }
	}

const Light: Colorscheme = {
	base : Colors.lighter,
	alt_base: "lightgray",
	// accent : "#ff3c38",
	accent : ACCENT,
	text : "black",
	alt_text: "white",
}
const Dark: Colorscheme = {
	base : Colors.darker,
	alt_base: "#303030",
	accent : ACCENT,
	text : "white",
	alt_text: "silver",
}
// ╔═╗┌─┐┌┐┌┌┬┐┌─┐
// ╠╣ │ ││││ │ └─┐
// ╚  └─┘┘└┘ ┴ └─┘
interface FontTypes {
	title: string,
	subtitle: string,
	caption: string,
	monospace: {
		light: string,
		medium: string,
		bold: string,
	},
	monospace_alt: {
		light: string,
		medium: string,
		bold: string,
	},
	cursive: string,
}

export const FONT: FontTypes = {
	title: "",
	subtitle: "",
	caption: "",
	monospace: { 
		light: "Inconsolata-Light",
		medium: "Inconsolata-Bold",
		bold: "Inconsolata-Black",
	},
	monospace_alt: { 
		light: "FragmentMono-Italic",
		medium: "FragmentMono-Regular",
		bold: "FragmentMono-Regular",
	},
	cursive: "",
}

const THEME: Colorscheme = Dark;

// export { Light, Dark };
export default THEME;
