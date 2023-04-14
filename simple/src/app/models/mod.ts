import {Changelog} from "./changelog";

export interface Mod {
	name: string;
	version: string;
	link: string;
	description: string;
	changes: Array<Changelog>;
	author: string;
	source_link: string;
	source_version: string;
}