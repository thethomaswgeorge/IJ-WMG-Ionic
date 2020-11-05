import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularPageRoutingModule } from './popular-routing.module';

import { PopularPage } from './popular.page';
import { HomePageRoutingModule } from '../../home/home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopularPageRoutingModule,
        HomePageRoutingModule,
    ],
  declarations: [PopularPage]
})
export class PopularPageModule {}
