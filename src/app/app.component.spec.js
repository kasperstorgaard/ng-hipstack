const td = require('testdouble');
const test = require('tape');
const TestComponent = require('./app.component');

test('some stuff', t => {
    const component = new TestComponent();
    t.equal(component.title, 'Angular 2 QuickStart');
    t.end();
});
