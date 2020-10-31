import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-container-button',
  templateUrl: './article-container-button.component.html',
  styleUrls: ['./article-container-button.component.scss'],
})
export class ArticleContainerButtonComponent implements OnInit {

  @Input()
  public url;

  @Input()
  public text = '';

  @Input()
  public href = '';

  constructor(private router: Router) {
  }

  ngOnInit() {}
  navigateTo(region) {
    this.router.navigate([region]);
  }
}
