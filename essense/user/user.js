import { Essense } from "../essense.js"

export class User extends Essense {
    constructor(){
        // use superclass constructor
        super()
        // create singelton instance
        if(User.instance){
            // return instance
            return User.instance
        }
        // create instance
        User.instance = this
    }
    DeleteInstanse = () => {
        delete User.instance
    }
}
