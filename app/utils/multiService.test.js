'use strict';
import 'babel-polyfill';
import assert  from 'assert';
import ms, {TIME_IN_MS} from './multiService';

describe('MultiService', function() {
    describe('#getTime()', function() {
        it('without arguments should return current time', function() {
            assert.equal(ms.getTime(), Date.now());
        });
        it('should return same value with same arguments as Date getTime', function () {
            assert.equal(ms.getTime(2016, 9, 10), (new Date(2016, 9, 10)).getTime());
        });
    });
    describe('#binarySearch', function () {
        it('should return 2', function () {
            let index = ms.binarySearch(
                [{a:1}, {a:2}, {a:3}, {a:3}, {a:3}, {a:4}, {a:5}, {a:6}],
                    item => item.a < 3,
                    item => item.a >= 3 && item.a < 5
            );
            assert.equal(index, 2);
        });
        it('should return 6', function () {
            let index = ms.binarySearch(
                [{a:2}, {a:2}, {a:3}, {a:3}, {a:3}, {a:4}, {a:6}],
                    item => item.a < 5
            );
            assert.equal(index, 6);
        });
        it('should return -1', function () {
            let index = ms.binarySearch(
                [],
                    item => item.a < 3,
                    item => item.a >= 3 && item.a < 5
            );
            assert.equal(index, -1);
        });
    });
    describe('#getTasksByDate()', function() {
        it('should return empty array when ', function() {
            let start = ms.getTime(2016, 11, 10);
            let end = ms.getTime(2016, 11, 15);
            assert.deepEqual(ms.getTasksByDate([], start, end), []);
        });
        it('should return empty array when ', function() {
            let start = ms.getTime(2016, 11, 11);
            let end = ms.getTime(2016, 11, 30);
            let tasks = [];
            let included = [];
            for (let i = 0, count = (end - start)/TIME_IN_MS.DAY; i <= count; i++) {
                let currDay = start + i*TIME_IN_MS.DAY;
                tasks.push({
                    assignDate: currDay
                }, {
                    assignDate: currDay
                }, {
                    assignDate: currDay
                });
                if (currDay >= (start + TIME_IN_MS.DAY * 5) && currDay < (end - TIME_IN_MS.DAY * 5)) {
                    included.push({
                        assignDate: currDay
                    }, {
                        assignDate: currDay
                    }, {
                        assignDate: currDay
                    })
                }
            }
            assert.deepEqual(ms.getTasksByDate(tasks, start + TIME_IN_MS.DAY * 5, end - TIME_IN_MS.DAY * 5), included);
        });
    });
});