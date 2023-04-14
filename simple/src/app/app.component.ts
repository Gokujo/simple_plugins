import {Component, OnInit} from '@angular/core';
import {Mod} from "./models/mod";
import {Plugin} from "./models/plugin";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Простые плагины и модификации';
	mods: Array<Mod> = [];
	plugins: Array<Plugin> = [];
	selectedMod: Mod | null = null;
	selectedPlugin: Plugin | null = null;

	constructor() {
	}

	ngOnInit(): void {
		this.mods.push({
			name: 'Fullstory-Metatags',
			version: '160.1.0',
			description: 'Плагин добавляет дополнительные метатеги из описания новости в заголовок',
			link: "https://raw.githubusercontent.com/Gokujo/simple-plugins/master/plugins/fullstory-metatags.xml",
			author: "SanDev",
			changes: [
				{
					version: "160.1.0",
					changes: [
						"Добавлена возможность добавлять свои собственные теги, помимо og и title, которые будут добавляться к соц. тегам обработки. Для добавления собственного тега нужно указать следующий тег: <custom:...></custom:...>. Важен сам тег custom и двоеточие после. После этого двоеточия вводите своё название тега.<br><br><b>Пример</b>: <custom:video:title>Кролик Роджер</custom:video:title>"
					]
				}
			],
			source_link: "https://raw.githubusercontent.com/San-Dev/dle-plugins/master/fullstory-metatags.xml",
			source_version: "?",

		});
	}

	selectMod(m: Mod): void {
		this.selectedPlugin = null;
		this.selectedMod = m;
	}

	selectPlugin(p: Plugin) {
		this.selectedMod = null;
		this.selectedPlugin = p;
	}




}
