import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from '../../services/regions/regions.service';
import { Article } from '../interfaces/article';
import { ArticlesService } from '../../services/articles/articles.service';

@Component({
    selector: 'app-regions',
    templateUrl: './regions.page.html',
    styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        public rs: RegionsService,
        private as: ArticlesService
    ) {
    }

    public region = '';
    public title = '';
    public articles;

    ngOnInit() {
        this.region = this.activatedRoute.snapshot.paramMap.get('region');
        this.rs.regions().map(val => {
            if (val.model === this.region) {
                this.title = val.text;
            }
        });

        this.as.getList('international', 0, 2, '').subscribe(val => this.articles = val);
    }

}
