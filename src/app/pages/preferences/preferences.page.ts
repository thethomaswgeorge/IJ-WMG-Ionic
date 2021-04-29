import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics/topics.service';
import { TopicTrendsComponent } from '../../components/topic-trends/topic-trends.component';
import { RegionsService } from '../../../services/regions/regions.service';

@Component({
    selector: 'app-preferences',
    templateUrl: './preferences.page.html',
    styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
    topicLength = 0;
    regionLength = 0;

    constructor(
        public modalCtrl: ModalController,
        public topics: TopicsService,
        public regions: RegionsService,
    ) {
    }

    ngOnInit() {
        this.getPrefs();
    }

    public getPrefs() {
        // this.storage.get('topics').then(val => {
        //     if (!!val) {
        //         val = JSON.parse(val);
        //         this.topicLength = val.length;
        //     }
        // });
        //
        // this.storage.get('regions').then(val => {
        //     if (!!val) {
        //         val = JSON.parse(val);
        //         this.regionLength = val.length;
        //     }
        // });
    }

    public async togglePrefs(selection: string) {
        const regions = this.regions.regions();
        const topic = this.topics.topics();
        const modal = await this.modalCtrl.create({
            component: TopicTrendsComponent,
            componentProps: {
                topics: (selection === 'topics') ? topic : regions,
            },
        });

        modal.onDidDismiss().then((data) => {
            console.log('saved to ', (selection === 'topics') ? 'topics' : 'regions');
            // this.storage.set((selection === 'topics') ? 'topics' : 'regions', JSON.stringify(data.data));
        });

        await modal.present();
    }
}
