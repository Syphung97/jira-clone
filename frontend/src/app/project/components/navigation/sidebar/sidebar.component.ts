import { Component, Input, OnInit } from '@angular/core';
import { SideBarLinks } from 'src/app/config/sidebar';
import { SidebarLink } from 'src/app/interface/models/sidebar-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() expanded!: boolean;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  sideBarLinks!: SidebarLink[];
  constructor() {}

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
