export class EventObserver {
    constructor() {
        this.subscribers = {};
    }

    subscribe(eventName, callback) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }

        this.subscribers[eventName].push(callback);
    }

    notify(eventName, data) {
        if (!this.subscribers[eventName]) {
            return;
        }

        this.subscribers[eventName].forEach(function (callback) {
            callback(data);
        });
    }
}

export const observer = new EventObserver();