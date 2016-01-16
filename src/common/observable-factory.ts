import * as _ from 'lodash';

export default function createObservable(): Observable {
    const listeners: Listener[] = [];
    return {
        addListener: addListener.bind(undefined, listeners),
        removeListener: removeListener.bind(undefined, listeners),
        notifyAll: notifyAll.bind(undefined, listeners)
    };
}

function addListener(listeners: Listener[], listener: Listener) {
    listeners.push(listener);
}

function removeListener(listeners: Listener[], listener: Listener) {
    _.remove(listeners, (l: Listener) => l === listener);
}

function notifyAll(listeners: Listener[]) {
    _.forEach(listeners, (l: Listener) => l());
}

interface Listener {
    (): any;
}

export interface Observable {
    addListener(listener: Listener);
    removeListener(listener: Listener);
    notifyAll();
}
