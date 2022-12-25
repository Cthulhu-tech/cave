export class Random {
    #min = 0
    #max = 0
    constructor(min, max) {
        this.#min = min
        this.#max = max
    }
    GetNumber = () => {
        return Math.floor(Math.random() * (this.#max - this.#min + 1) + this.#min)
    }
    Choice = (array) => {
        return array[this.GetNumber(0, array.length - 1)]
    } 
}
