import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  //  { path: 'dashboard', title: 'Login',  icon: 'ti-panel', class: '' },
  //  { path: 'user', title: 'Adminitrasion',  icon:'ti-user', class: '' },
   // { path: 'table', title: 'List Q&A',  icon:'ti-view-list-alt', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'showtopic', title: 'showtopic',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'user', title: 'User',  icon:'ti-user', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
