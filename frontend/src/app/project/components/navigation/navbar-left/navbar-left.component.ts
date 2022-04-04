import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  items!: NavItem[];
  constructor() {
    this.items = [
      new NavItem('search', 'Search issues', this.onSeachIssue.bind(this)),
      new NavItem('plus', 'Create issue', this.onSeachIssue.bind(this))
    ];
  }

  ngOnInit(): void {}

  onSeachIssue(): void {

  }

  onCreateIssue(): void {

  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
