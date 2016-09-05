import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
})
export class AppComponent {
    constructor () {
        this.title = 'Angular 2 QuickStart';
    }
}

