import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    constructor(
        private as: ArticlesService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    public searchResults = [];
    public pageNumber = 0;

    @Input()
    public search;

    ngOnInit() {
        this.search = this.activatedRoute.snapshot.paramMap.get('search');
        this.getResults(false, '');
    }

    getResults(isFirstLoad, event) {
        this.as.getSearchResults(this.search, (this.pageNumber * 10), 10)
            .subscribe((val: any) => {
                for (let i = 0; i < val.length; i++) {
                    this.searchResults.push(val[i]);
                }
            });

        if (isFirstLoad) {
            event.target.complete();
        }
        this.pageNumber++;
    }

    doInfinite(event: any) {
        this.getResults(true, event);
    }
}
