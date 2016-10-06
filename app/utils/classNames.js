'use strict';

export default function classNames(...classes) {
    return classes.map(className => {
        if (typeof className === 'string') {
            return className;
        }
        if (typeof className === 'object' && className !== null) {
            let classList = [];
            for (let name in className) {
                if (!className.hasOwnProperty(name)) {
                    continue;
                }
                if (className[name]) {
                    classList.push(name)
                }
            }
            return classList.join(' ');
        }
        if (!className) {
            console.warn('empty parameter');
            return '';
        }
        throw new Error(`unknown attribute type ${className}`);
    }).join(' ')
}