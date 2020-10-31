import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesPageRoutingModule } from './articles-routing.module';

import { ArticlesPage } from './articles.page';
import { HomePageRoutingModule } from '../home/home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ArticlesPageRoutingModule,
        HomePageRoutingModule,
    ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
