import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from '../app.component';
import {Mod} from "../models/mod";
import {Plugin} from "../models/plugin";

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements AfterViewInit{

    @ViewChild(AppComponent) mainApp: any;
    mods: Array<Mod> = [];
    plugins: Array<Plugin> = [];

    constructor() {
    }

    ngAfterViewInit(): void {
        this.mods = this.mainApp.mods;
        this.plugins = this.mainApp.plugins;
    }


}
