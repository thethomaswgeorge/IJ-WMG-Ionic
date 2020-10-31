import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.scss'],
})
export class SidebarSearchComponent implements OnInit {

  @Input()
  public shouldShowCancel= true;

  constructor() { }

  ngOnInit() {}

  onCancel($event: any) {
    
  }
}
