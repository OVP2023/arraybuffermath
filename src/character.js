const listGame = ['Bowman','Swordsman','Magician','Daemon','Undead','Zombie']


class Character {
    constructor(name,type) {
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1
        if (this.name.length < 2 || this.name.length > 10 || this.name.length == undefined) {
            throw new Error("Неправильное поле name  " + this.name)
        }       
        if (!listGame.includes(this.type)){
            throw new Error("Неправильное поле type  " + this.type)
        }
    }
    levelUp(){
        if (this.health > 0){
            this.level = this.level + 1
            this.attack = this.attack*1.2
            this.defence = this.defence*1.2
            this.health = 100
        }else{
            throw new Error("Нельзя повысить уровень погибшего " + this.name)
        }    
    }
    damage(points){
        if (this.health > 0){
            this.health = this.health - points * (1 - this.defence / 100)
            if (this.health < 0){
                this.health = 0
            }
        }
        else {
            this.health = 0
        }
    }
}

module.exports = Character