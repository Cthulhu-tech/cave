export class Rectangle {
    constructor(x, y, w, h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }
    GetHalfDimentionX = () =>{
      return this.w / 2
    }
    GetHalfDimentionY = () => {
      return this.h / 2
    }
    GetCenterX = () => {
      return this.x + (this.w / 2)
    }
    GetCenterY = () => {
      return this.y + (this.h / 2)
    }
}
