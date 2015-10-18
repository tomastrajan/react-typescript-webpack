import * as _ from 'lodash';

export default function createObservable() {
    const listeners: Listener[] = [];
    return {
        addListener: addListener.bind(null, listeners),
        removeListener: removeListener.bind(null, listeners),
        notifyAll: notifyAll.bind(null, listeners)
    };
}

function addListener(listeners: Listener[], listener: Listener) {
    listeners.push(listener);
}

function removeListener(listeners: Listener[], listener: Listener) {
    _.remove(listeners, l => l === listener);
}

function notifyAll(listeners: Listener[]) {
    _.forEach(listeners, l => l());
}

interface Listener {
    (): any;
}