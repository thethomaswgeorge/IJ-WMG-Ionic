import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/article';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ArticlesService } from '../../services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  public isLoading = false;
  public articleId: string;
  public article;

  constructor(private activatedRoute: ActivatedRoute,
              private socialSharing: SocialSharing,
              private as: ArticlesService) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.as.getArticle(this.articleId).subscribe(val => this.article = val);
  }

    openShareWindow() {
      this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
    }
}
