import { Component } from '@angular/core';

export class TestComponent {
    title = 'Angular 2 QuickStart';
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
})
export class AppComponent {
    title = 'Angular 2 QuickStart';
}

