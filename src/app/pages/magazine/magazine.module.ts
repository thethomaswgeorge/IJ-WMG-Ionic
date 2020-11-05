import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazinePageRoutingModule } from './magazine-routing.module';

import { MagazinePage } from './magazine.page';
import { HomePageRoutingModule } from '../../home/home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MagazinePageRoutingModule,
        HomePageRoutingModule,
    ],
  declarations: [MagazinePage]
})
export class MagazinePageModule {}
