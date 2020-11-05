import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidebarSearchComponent } from './components/sidebar-search/sidebar-search.component';
import { SidebarRowComponent } from './components/sidebar-row/sidebar-row.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TopicTrendsComponent } from './components/topic-trends/topic-trends.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'region/:region',
    loadChildren: () => import('./regions/regions.module').then( m => m.RegionsPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'popular',
    loadChildren: () => import('./pages/popular/popular.module').then( m => m.PopularPageModule)
  },
  {
    path: 'magazine',
    loadChildren: () => import('./pages/magazine/magazine.module').then( m => m.MagazinePageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'listen',
    loadChildren: () => import('./pages/listen/listen.module').then( m => m.ListenPageModule)
  },
  {
    path: 'search/:search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./pages/topics/topics.module').then( m => m.TopicsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SidebarSearchComponent,
      TopicTrendsComponent,
    SidebarRowComponent,
  ],
  exports: [RouterModule, SidebarSearchComponent, SidebarRowComponent, TopicTrendsComponent],
})
export class AppRoutingModule { }
