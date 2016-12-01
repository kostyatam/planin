'use strict'

import React, {Component} from 'react';
import style from './task.css';
import {classNames} from 'utils';

export class Task extends Component {
    constructor (props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onKeyTitle = this.onKeyTitle.bind(this);
        this.onKeyText = this.onKeyText.bind(this);
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
    onComplete () {
        let {task, onComplete} = this.props;
        onComplete && onComplete(task);
    }
    onKeyTitle (e) {
        let {onKeyTitle} = this.props;
        if (e.keyCode === 13) {
            this.refs.title.blur();
            this.refs.text.focus();
        }
        onKeyTitle && onKeyTitle(e);
    }
    onKeyText (e) {
        let {onKeyText} = this.props;
        if (e.metaKey && e.keyCode === 13) {
            this.onComplete();
            return;
        }
        onKeyText && onKeyText(e);
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
                            ref="title"
                            className={style.title}
                            type="text"
                            value={task.title}
                            onChange={this.onTitleChange}
                            onKeyUp={this.onKeyTitle}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <textarea
                        ref="text"
                        className={style.body}
                        value={task.text}
                        onChange={this.onTextChange}
                        onKeyDown={this.onKeyText}>
                    </textarea>
                </div>
            </div>
        )}
};