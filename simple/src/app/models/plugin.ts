import {Changelog} from "./changelog";

export interface Plugin {
	name: string;
	version: string;
	link: string;
	description: string;
	changes: Array<Changelog>;
}