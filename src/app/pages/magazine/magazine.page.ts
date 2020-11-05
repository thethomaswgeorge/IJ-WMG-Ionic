import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles/articles.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.page.html',
  styleUrls: ['./magazine.page.scss'],
})
export class MagazinePage implements OnInit {
  magazines;

  constructor(
      private as: ArticlesService
  ) { }

  ngOnInit() {
    this.as.getMagazines( 0, 5).subscribe(val => this.magazines = val);
  }

}
