'use strict';
import loremIpsum from 'lorem-ipsum';

export let data = {
    days: getDays('jule'),
    currentDay: getTimes(2016, 6, 15)
};

function getDays (month, year = 2016) {
    let days = [];
    month = getMonthNumber(month);
    let daysInCurrentMonth = daysInMonth(month, year);
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        days.push({
            disabled: false,
            tasks: getTasks(),
            date: getTimes(year, month, i),
            number: (new Date(getTimes(year, month, i))).getDate()
        })
    };
    let firstDate = (new Date(year, month, 1)).getDay();
    if (firstDate !== 0) {
        let daysInPrevMonth = daysInMonth(month - 1, year);
        for (let i = 0; i < firstDate; i++) {
            console.log('%s %s', i, daysInPrevMonth - i, firstDate)
            days.unshift({
                disabled: true,
                tasks: getTasks(),
                date: getTimes(year, month - 1, daysInPrevMonth - i),
                number: (new Date(getTimes(year, month - 1, daysInPrevMonth - i))).getDate()
            })
        };
    };
    let lastDate = (new Date(year, month, daysInCurrentMonth)).getDay();

    if (lastDate !== 6) {
        for (let i = 1; i <= 6 - lastDate; i++) {
            days.push({
                disabled: true,
                tasks: getTasks(),
                date: getTimes(year, month + 1, i),
                number: (new Date(getTimes(year, month + 1, i))).getDate()
            })
        };
    }
    return days;
}

function getTimes (...params) {
    return (new (Function.prototype.bind.apply(Date, [null, ...params]))).getTime();
}

function getMonthNumber (month) {
    let months = {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6,
        8: 7,
        9: 8,
        10: 9,
        11: 10,
        12: 11,
        'january': 0,
        'february': 1,
        'march': 2,
        'april': 3,
        'may': 4,
        'june': 5,
        'jule': 6,
        'august': 7,
        'september': 8,
        'october': 9,
        'november': 10,
        'december': 11
    };
    return months[month];
}

function daysInMonth(month,year) {
    return new Date(year, month + 1, 0).getDate();
}


function getTasks () {
    let tasks = [];
    for (let i = 0; i < Math.floor(Math.random() * 8);i++) {
        tasks.push({
            id: Math.floor(Math.random()*1000 * Math.random()*5),
            text: loremIpsum()
        })
    }
    return tasks;
}