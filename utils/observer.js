export class Observer {
    #observers
    constructor(){
        this.#observers = []
    }
    subscribe(callcback) {
        this.#observers.push(callcback)
    }
    unsubscribe(callback) {
        this.#observers = this.observers.filter(observer => observer !== callback)
    }
    notlify(data) {
        this.#observers.forEach(observer => observer(data))
    }
}
