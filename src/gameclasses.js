const Character = require('./character.js')


class Magician extends Character {
    constructor(name,type,stoned) {
        super(name,type); //  вызов конструктора родителя
        this.health = 100
        this.level = 1
        this._attack = 100
        this.defence = 40
        this._stoned = false
    }
    set stoned(value){
        this._stoned = value
    }
    get stoned(){
        return this._stoned
    }
    set attack(kletka){
        if (this._stoned){
            this._attack = this._attack*(100-(kletka-1)*10)/100 - Math.log2(kletka)*5 //вместо первой 100 значение аттаки
        }else{
            this._attack = 100*(100-(kletka-1)*10)/100
        }
    }
    get attack(){
        return this._attack
    }
}
class Daemon extends Magician {
    constructor(name,type,stoned) {
        super(name,type,stoned); //  вызов конструктора родителя
        this.health = 100
        this.level = 1
        this._attack = 100
        this.defence = 40
        this._stoned = false
    }
}
module.exports = {Daemon,Magician,}
