'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import {Month, Navigator, Task} from 'components';

let day = {
    number: 2,
    today: false,
    disabled: false,
    selected: false,
    tasks: [{
        id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
};

let data = [Object.assign({}, day, {today: true}), Object.assign({}, day, {selected: true}), Object.assign({}, day)];
let weeks = [];
for (let i = 0; i < 4; i++) {
    weeks[i] = [];
    for (let j = 0; j < 7; j++) {
        let number = (i * 7) + j + 1;
        let selected = number === 10;
        let today = false//number === 10;
        weeks[i].push(Object.assign({}, day, {number, selected, today}))
    }
}
weeks[4] = [{
    number: 29,
    today: false,
    disabled: false,
    selected: false,
    tasks: [{
        id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}, {
    number: 30,
    today: false,
    disabled: false,
    selected: false,
    tasks: [{
        id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}, {
    number: 31,
    today: false,
    disabled: false,
    selected: false,
    tasks: [{
        id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}, {
    number: 1,
    today: true,
    disabled: true,
    selected: false,
    tasks: [{
        id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}, {
    number: 2,
    today: false,
    disabled: true,
    selected: false,
    tasks: [{
    id: 0,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }]
}, {
    number: 3,
    today: false,
    disabled: true,
    selected: false,
    tasks: [{
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}, {
    number: 4,
    today: false,
    disabled: true,
    selected: false,
    tasks: [{
        id: 9,
        title: 'Hello world!sdfkjasdkjfllaskdjfklasdjflksdajflaskdjf sadkfjasldkfasdf'
    }, {
        id: 10,
        title: 'Hello world!'
    }]
}];
let navigator = {
    back: 'May',
    forward: 'June',
    title: 'June\'16'
};

const UiKit = () => (
    <div>
        <div style={{width: '400px'}}>
            <Task task={task}></Task>
        </div>
        <div>
            <Navigator back={'May'} forward={'July'} title={'June\'16'}></Navigator>
            <Month weeks={weeks}></Month>
        </div>
    </div>
);
ReactDOM.render(<UiKit/>, document.getElementById('ui-kit'));