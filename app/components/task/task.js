'use strict'

import React, {Component} from 'react';
import style from './task.css';
import {classNames} from 'utils';

export class Task extends Component {
    constructor (props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }
    _onTaskChange ({title, text}) {
        let {onTaskChange} = this.props;
        onTaskChange && onTaskChange({title, text});
    }
    onTitleChange ({target}) {
        let title = target.value;
        this._onTaskChange({title, text: this.props.task.text});
    }
    onTextChange ({target}) {
        let text = target.value;
        this._onTaskChange({title: this.props.task.title, text});
    }
    render () {
        let {task = {title: '', text: ''}, isNew = false} = this.props;
        return (
            <div className={classNames(style.task, {
                [style.task_new]: isNew
            })}>
                <div className={style.wrapper}>
                    <div className={style.header}>
                        <div className={style.circle}></div>
                        <input
                            className={style.title}
                            type="text"
                            value={task.title}
                            onChange={this.onTitleChange}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <textarea
                        className={style.body}
                        value={task.text}
                        onChange={this.onTextChange}>
                    </textarea>
                </div>
            </div>
        )}
};