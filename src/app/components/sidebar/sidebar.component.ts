import {Component, OnInit} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {LocalStorageService} from '../../shared/localStorage.service';
import {AuthGuard} from '../../shared/auth.guard';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // {path: '/products', title: 'Add medicine', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/add-playlist', title: 'Add playlist', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/show-playlist', title: 'Show playlist', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/show-media', title: 'Show media', icon: 'ni-circle-08 text-pink', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private ls: LocalStorageService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  logout() {
    this.ls.delete('token');
    this.router.navigate(['/login']);
  }
}
