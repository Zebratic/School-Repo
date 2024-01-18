class YouTubeChannel {
    constructor(name) {
        this.subscribers = [];
        this.name = name;
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber); // add subscriber to subscribers array
        console.log(subscriber.name + " subscribed to " + this.name + "'s channel! (" + this.subscribers.length + " subscribers)");
    }

    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1)
        {
            console.log(subscriber.name + " unsubscribed from " + this.name + "'s channel! (" + (this.subscribers.length - 1) + " subscribers)");
            this.subscribers.splice(index, 1); // remove subscriber from subscribers array
        }
    }

    notifySubscriber(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1)
            this.subscribers[index].notify(subscriber); // execute notify method for the subscriber at this index
    }

    notifyAllSubscribers(videoTitle) {
        for (let i = 0; i < this.subscribers.length; i++)
            this.subscribers[i].notify(videoTitle); // execute notify method for all subscribers
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }

    notify(videoTitle) {
        console.log(this.name + " received a notification for the new video: " + videoTitle);
    }
}

const youtubeChannel = new YouTubeChannel("Mr Beast");

const names = ["John", "Alice", "Bob", "Emily", "James", "Lily", "Oliver", "Emma", "Jack", "Charlotte"];
const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

// Create new subscribers and unsubscribe users over time
setInterval(() => {
    const randomNum = Math.random();
    if (randomNum < 0.8) {
        const newSubscriber = new Subscriber(names[Math.floor(Math.random() * names.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)]);
        youtubeChannel.subscribe(newSubscriber);
    } else {
        const randomIndex = Math.floor(Math.random() * youtubeChannel.subscribers.length);
        const unsubscribedSubscriber = youtubeChannel.subscribers[randomIndex];
        youtubeChannel.unsubscribe(unsubscribedSubscriber);
    }
}, 1000);

// Upload new video at random times
setInterval(() => {
    const videoTitle = "New Video " + Math.floor(Math.random() * 100);
    console.log("---------------------[ NEW VIDEO UPLOADED ]---------------------");
    youtubeChannel.notifyAllSubscribers(videoTitle);
    console.log("---------------------[ NOTIFICATION SENT TO " + youtubeChannel.subscribers.length + " SUBSCRIBERS ]---------------------");
}, Math.random() * 30000);