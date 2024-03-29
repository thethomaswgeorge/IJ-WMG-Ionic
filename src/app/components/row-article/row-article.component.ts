import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-article',
  templateUrl: './row-article.component.html',
  styleUrls: ['./row-article.component.scss'],
})
export class RowArticleComponent implements OnInit {

  @Input()
  public articles: Article[];

  @Input()
  public limit = 2;

  @Input()
  public allowImages = true;

  @Input()
  public redirectURL = 'article';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateTo(id: number) {
      this.router.navigate([`${this.redirectURL}`, id]);
  }
}
