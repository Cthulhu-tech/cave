export class PositionMenu {
    #backButton
    #menuSection
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
        if(!this.#backButton.hasAttribute('back')){
            this.ShowSection('main_menu')
        }else{
            this.ShowSection(this.#backButton.getAttribute('back'))
            this.#backButton.removeAttribute('back')
        }
    }
    ShowSection = (className) => {
        this.#menuSection.forEach((menuSection) => menuSection.classList.contains(className) ? menuSection.style.display = 'flex' : menuSection.style.display = 'none')
    }
    SetBackPosition = (positionBack) => {
        this.#backButton.setAttribute('back', positionBack)
    }
}