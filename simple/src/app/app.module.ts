import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgIf} from "@angular/common";

import {AppComponent} from './app.component';
import {ModFullstoryMetatagsComponent} from './mod-fullstory-metatags/mod-fullstory-metatags.component';
import {FormsModule} from "@angular/forms";
import {NgbDropdownItem, NgbModule, NgbDropdownMenu, NgbDropdown, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {RouterLinkActive} from "@angular/router";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule,
		NgbDropdownMenu,
		NgbDropdown,
		NgbDropdownToggle,
		NgbDropdownItem,
		RouterLinkActive,
		NgIf
	],
	declarations: [
		AppComponent,
		SidebarComponent,
		NavbarComponent,
		ModFullstoryMetatagsComponent
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
