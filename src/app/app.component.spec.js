import * as td from 'testdouble';
import * as rm from 'reflect-metadata';
import { test } from 'tape';
import { AppComponent } from './app.component';

test('AppComponent instance', t => {
    const component = new AppComponent();
    t.equal(component.title, 'Angular 2 QuickStart',
        'Given a component instance, the title should match the hardcoded string');
    t.end();
});
