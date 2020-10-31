import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ArticleContainerComponent } from '../components/article-container/article-container.component';
import { RowArticleComponent } from '../components/row-article/row-article.component';
import { ArticleContainerButtonComponent } from '../components/article-container-button/article-container-button.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
    declarations: [
        ArticleContainerComponent,
        RowArticleComponent,
        ArticleContainerButtonComponent,
    ],
    exports: [RouterModule, ArticleContainerComponent, RowArticleComponent, ArticleContainerButtonComponent],
})
export class HomePageRoutingModule {}
