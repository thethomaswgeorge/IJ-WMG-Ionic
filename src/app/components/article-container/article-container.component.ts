import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent implements OnInit {

  @Input()
  public articleHeader = '';

  constructor() { }

  ngOnInit() {}

}
