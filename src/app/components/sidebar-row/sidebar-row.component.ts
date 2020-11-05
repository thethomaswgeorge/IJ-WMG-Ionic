import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-row',
  templateUrl: './sidebar-row.component.html',
  styleUrls: ['./sidebar-row.component.scss'],
})
export class SidebarRowComponent implements OnInit {
  @Input()
  public startIcon = '';

  @Input()
  public endIcon = '';

  @Input()
  public text = '';

  @Input()
  public route = '';

  @Input()
  public expandable = false;
  expanded = false;

  @Input()
  public theme = 'default';

  constructor() { }

  ngOnInit() {}

  expand() {
    if (!!this.expandable) {
      this.expanded = !this.expanded;
    }
  }
}
