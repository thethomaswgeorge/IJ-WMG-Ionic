import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles/articles.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {
  currentList: string;

  week; day; month;

  constructor(private as: ArticlesService) { }

  ngOnInit() {

    this.as.getHeadlines('week', 0, 10, '').subscribe(val => this.week = val);
    this.as.getHeadlines('month', 0, 10, '').subscribe(val => this.month = val);
    this.as.getHeadlines('day', 0, 10, '').subscribe(val => this.day = val);
    this.currentList = 'day';
  }

    changeList(selected: string) {
        this.currentList = selected;
    }
}
