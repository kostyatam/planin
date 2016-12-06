'use strict';

import React from 'react';
import {Day} from './day';
import {classNames} from 'utils';

import style from './month.css';

let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export const Month = ({ weeks, onChooseDay = e => e }) => (
    <div>
        <div className={style.navigate}>
            {days.map(name => {
                return (<div key={name} className={style.navigate__item}>
                    {name}
                </div>)
            })}
        </div>
        <div className={style.month}>
            {weeks.map((week, index) => <Week key={index} week={week} onChooseDay={onChooseDay}></Week>)}
        </div>
    </div>
);

const Week = ({week, onChooseDay = e => e}) => (
    <div className={style.week}>
        {week.map((day, index) =>
            <div key={index} className={classNames(style.day, {
                [style.day_selected]: day.selected
            })}>
                <div className={style.day__container} onClick={onChooseDay.bind(null, day)}>
                    <Day data={day}></Day>
                </div>
            </div>
        )}
    </div>
);