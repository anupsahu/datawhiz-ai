import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    document.location.reload();
  }
}
