'use strict';
export const TIME_IN_MS = {
    SECOND: 1000,
    MINUTE: 1000 * 60,
    HOUR: 1000 * 60 * 60,
    DAY: 1000 * 60 * 60 * 24
};
export default new class MultiService {
    random (from, to) {
        return Math.random() * (to - from) + from;
    }

    randomInt (from, to) {
        return Math.round(this.random(from, to));
    }

    getTime (...date) {
        return date.length ? (new Date(...date)).getTime() : Date.now();
    }
    parseDate (params) {
        let date = new Date(params);
        return {
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }
    insertTask (tasks, task) {
        let {assignDate} = task;
        let indexBefore = this.binarySearch(tasks, task => task.assignDate < assignDate);
        return tasks.slice(0, indexBefore + 1).concat(task, ...tasks.slice(indexBefore + 2));
    }

    insertTaskToWeeks (weeks, task) {
        return weeks.map(week => {
            if (week[0].assignDate < task.assignDate || week[6].assignDate > task.assignDate) return week;
            return week.map(day => {
                if (day.assignDate !== task.assignDate) return day;
                return {
                    ...day,
                    tasks: this.insertTask(day.tasks, task)
                }
            })
        });
    }
    getMonthCalendar (tasks, month, year) {
        let {start, end} = this.getMonthBorders(month, year);
        let monthTasks = this.getTasksByDate (tasks, start, end);
        let calendar = [];
        for (let i = 0, count = (end - start)/TIME_IN_MS.DAY;i < count;i++) {
            let tasks = this.getTasksByDate (monthTasks, start, start + TIME_IN_MS.DAY);
            calendar[i] = {
                number: i+1,
                disabled: false,
                date: start + TIME_IN_MS.DAY*i,
                tasks
            };
            monthTasks = monthTasks.slice(tasks.length);
        }

        let beginDay = new Date(calendar[0].date).getDay();
        let endDay = new Date(calendar[calendar.length - 1].date).getDay();
        if (beginDay !== 1) {
            let from = start - (beginDay !== 0 ? beginDay - 1 : 6) * TIME_IN_MS.DAY;
            let to = start;
            let prevMonthTasks = this.getTasksByDate (tasks, from, to);
            for (let i = 0, count = (to - from)/TIME_IN_MS.DAY;i < count;i++) {
                let tasks = this.getTasksByDate (prevMonthTasks, from, from + TIME_IN_MS.DAY);
                let number  = (new Date(from + TIME_IN_MS.DAY*i)).getDate();
                calendar.unshift({
                    number,
                    disabled: true,
                    date: from + TIME_IN_MS.DAY*i,
                    tasks
                });
                prevMonthTasks = prevMonthTasks.slice(tasks.length);
            }
        }

        if (endDay !== 0) {
            let from = end;
            let to = end + (7 - endDay) * TIME_IN_MS.DAY;
            let nextMonthTasks = this.getTasksByDate (tasks, from, end);
            for (let i = 0, count = (to - from)/TIME_IN_MS.DAY;i < count;i++) {
                let tasks = this.getTasksByDate (nextMonthTasks, from, from + TIME_IN_MS.DAY);
                let number  = (new Date(from + TIME_IN_MS.DAY*i)).getDate();
                calendar.push({
                    number,
                    disabled: true,
                    date: from + TIME_IN_MS.DAY*i,
                    tasks
                });
                nextMonthTasks = nextMonthTasks.slice(tasks.length);
            }
        }

        return calendar;
    }

    getWeeks (calendar) {
        return this.range(Math.ceil(calendar.length / 7)).map((item, index) => {
            return calendar.slice(index * 7, index * 7 +7)
        })
    }

    range (n) {
        var arr = [];
        for (let i = n - 1; i >= 0; i--) {
            arr[i] = i;
        }
        return arr;
    }

    getMonthBorders (month, year) {
        if (!year) {
            let date = new Date(month);
            month = date.getMonth();
            year = date.getFullYear();
        }
        let start = this.getTime(year, month);
        let end = this.getTime(month<12 ? year : year + 1, month<12 ? month + 1 : 0);
        return {start, end};
    }

    getTasksByDate (tasks, start, end) {
        if (!tasks.length) return [];

        let sliceStart = this.binarySearch(tasks, task => task.assignDate < start, task => task.assignDate >= start && task.assignDate < end);
        let sliceEnd;
        if (sliceStart !== -1) {
            sliceEnd = this.binarySearch(tasks.slice(sliceStart), task => task.assignDate < end, task => task.assignDate >= start && task.assignDate <= end);
            return (sliceEnd !== -1) ? tasks.slice(sliceStart, sliceStart + sliceEnd) : tasks.slice(sliceStart);
        } else {
            return [];
        };
    }

    binarySearch (arr, toRight, compare) {
        let first = 0,
            end = arr.length,
            mid;

        for (;first < end;) {
            mid = Math.floor(first + (end - first) / 2);
            //console.log(arr[first], arr[end]);
            if (toRight(arr[mid])) {
                first = mid + 1;
            } else {
                end = mid;
            }
        }
        return !compare || compare(arr[end]) ? end : -1;
    }

    constructor () {
        this._monthNumber = (() => {
            let months = {};
            ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
                .map((name, index) => {
                    months[index] = name;
                    months[name] = index;
                });
            return months;
        })()
    }
}