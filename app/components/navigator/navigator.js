'use strict';
import React from 'react';
import style from './navigator.css';
import {classNames} from 'utils';

export const Navigator = ({back, title, forward, caption}) => (
    <div className={style.navigator}>
        <div className={style.back}>
            {back}
        </div>
        <div className={style.title}>
            {title}
        </div>
        <div className={style.forward}>
            {forward}
        </div>
    </div>
);