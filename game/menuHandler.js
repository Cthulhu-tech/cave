export class PositionMenu {
    #backButton
    #menuSection

    #backArray = []
    constructor() {
        if(PositionMenu.instance){
            return PositionMenu.instance
        }
        PositionMenu.instance = this

        this.#menuSection = [...document.querySelectorAll('.menu_section')]
        this.#backButton = document.querySelector('.button_back')
        this.#backButton.addEventListener('click', this.#getBack)
    }
    #getBack = () => {
        if(this.#backArray.length === 0){
            this.ShowSection('main_menu')
        }else{
            this.ShowSection(this.#backArray.pop())
        }
    }
    HiddenSection = () => {
        this.#menuSection.forEach((menuSection) => menuSection.style.display = 'none')
    }
    ShowSection = (className) => {
        this.#menuSection.forEach((menuSection) => menuSection.classList.contains(className) ? menuSection.style.display = 'flex' : menuSection.style.display = 'none')
    }
    SetBackPosition = (positionBack) => {
        this.#backArray.push(positionBack)
    }
}