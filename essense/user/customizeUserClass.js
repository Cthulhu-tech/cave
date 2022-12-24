import { PositionMenu } from "../../game/menuHandler.js"

export class CustomizeUserClass {
    constructor() {
        if(CustomizeUserClass.instance){
            return CustomizeUserClass.instance
        }
        CustomizeUserClass.instance = this  
    }
    Customize = () => {
        new PositionMenu().SetBackPosition('choose_character')
        new PositionMenu().ShowSection('customizite_character')
    }
}