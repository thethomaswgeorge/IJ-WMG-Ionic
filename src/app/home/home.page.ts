import { Component } from '@angular/core';
import { Article } from '../interfaces/article';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles/articles.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    articles: Article[] = [];
    pickedForYou: Article[] = [];
    national; day; week; month;
    north; south; east; west;
    international; midwest; southcentral; southeast;

    constructor(private router: Router,
                private as: ArticlesService) {
        this.loadArticles();
    }

    public loadArticles() {
        this.as.getList('national', 0, 4, '').subscribe(val => this.national = val);
        this.as.getList('month', 0, 4, '').subscribe(val => this.month = val);
        this.as.getList('day', 0, 4, '').subscribe(val => this.day = val);
        this.as.getList('week', 0, 4, '').subscribe(val => this.week = val);
        this.as.getList('east', 0, 4, '').subscribe(val => this.east = val);
        this.as.getList('west', 0, 4, '').subscribe(val => this.west = val);
        this.as.getList('north', 0, 4, '').subscribe(val => this.north = val);
        this.as.getList('south', 0, 4, '').subscribe(val => this.south = val);

        this.as.getList('international', 0, 2, '').subscribe(val => this.international = val);
        this.as.getList('midwest', 0, 2, '').subscribe(val => this.midwest = val);
        this.as.getList('southcentral', 0, 2, '').subscribe(val => this.southcentral = val);
        this.as.getList('southeast', 0, 2, '').subscribe(val => this.southeast = val);
    }
}
