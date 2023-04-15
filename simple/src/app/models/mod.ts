import {Changelog} from "./changelog";
import {Plugin} from "./plugin";

export interface Mod extends Plugin{
	author: string | null;
	source_link: string | null;
	source_version: string | null;
}