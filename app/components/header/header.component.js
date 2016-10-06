'use strict';
import React from 'react';

import styles from './header.component.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}></div>
            </header>
        )
    }
}