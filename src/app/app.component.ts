import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;

    public form = new FormGroup({
            search: new FormControl(''),
        },
    );
    public appPages = [
        {
            title: 'Today',
            url: '/home',
            icon: 'calendar',
        },
        {
            title: 'Most Popular',
            url: '/popular',
            icon: 'star',
        },
        {
            title: 'Magazine',
            url: '/magazine',
            icon: 'book',
        },
        {
            title: 'Reading Preferences',
            url: '/preferences',
            icon: 'cog',
        },
        {
            title: 'Listen Now',
            url: '/listen',
            icon: 'volume-high',
        },
    ];
    topics;
    topicLength: number;
    regionLength: number;
    regions;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private http: HttpClient,
        private menu: MenuController,
        private router: Router,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        // this.storage.get('topics').then(val => {
        //     this.topicLength =  val.length;
        // });
        //
        // this.storage.get('regions').then(val => {
        //     if (!!val) {
        //         this.regionLength = val.length;
        //     }
        // });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

    onClick(event) {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
        systemDark.addEventListener('change', this.colorTest);
        if (event.detail.checked) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }

    colorTest(systemInitiatedDark) {
        if (systemInitiatedDark.matches) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }
    closeSidebar() {
        this.menu.toggle('slidingMenu');
    }

    onEnter() {
        const search = this.form.get('search').value;
        if (!!search) {
            this.closeSidebar();
            this.router.navigate(['search', search]);
        }
    }
}
