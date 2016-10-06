'use strict';
import React from 'react';
import {classNames} from 'utils';
import Day from './day.component.js';
import styles from './calendar.component.scss';

export class Calendar extends React.Component {
    buildWeek (days, currentDay) {
        let weeks = [];
        for (let i = 0; i < days.length / 7; i++) {
            let week = [];
            for (let j = 0; j < 7; j++) {
                let day = days[i * 7 + j];
                let {number, date, tasks, disabled} = day;
                week.push(
                    <Day key={date}
                         number={number}
                         tasks={tasks}
                         isToday={date === currentDay}
                         date={date}
                         disabled={disabled}/>
                );
            }
            weeks.push(
                <div key={i} className={styles.week}>
                    {week}
                </div>
            );
        }
        return weeks;
    }

    render() {
        let {days, currentDay} = this.props;
        let weeks = this.buildWeek(days, currentDay);

        let daysNamesList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(dayName => {
            return (
                <div key={dayName} className={styles['days-names__item']}>
                    {dayName}
                </div>
            )
        });

        return (
            <section className={styles.calendar}>
                <header className={classNames(styles.calendar__header, styles.navigation)}>
                    <div className={classNames(styles.navigation__item, styles.navigation__item_prev)}>
                        <div className={classNames(styles.navigation__label)}>
                            May
                        </div>
                    </div>
                    <div className={classNames(styles.navigation__item, styles.navigation__item_header)}>
                        <div>
                            june'15
                        </div>
                    </div>
                    <div className={classNames(styles.navigation__item, styles.navigation__item_next)}>
                        <div className={classNames(styles.navigation__label)}>
                            July
                        </div>
                    </div>
                </header>
                <div className={styles['calendar__days-names']}>
                    <div className={styles['days-names']}>
                        {daysNamesList}
                    </div>
                </div>
                <div className={styles['calendar__calendar']}>
                    {weeks}
                </div>
            </section>
        )
    }
}


