export class Observer {
    #observers
    constructor(){
        this.#observers = new Set()
    }
    subscribe(callcback) {
        this.#observers.add(callcback)
    }
    unsubscribe(callback) {
        this.#observers = this.observers.filter(observer => observer !== callback)
    }
    notlify(data = null) {
        if(data)
            this.#observers.forEach(observer => observer(data))
        else
            this.#observers.forEach(observer => observer())
    }
}
