const {Daemon,Magician,} = require('./gameclasses.js')

const strong = new Magician('Strong','Magician') // аттака=100, без дурмана
strong.stoned = true //set stoned     маг под дурманом
strong.attack = 2 //set attack        аттака на 2 клетки
console.log('маг под дурманом аттакует на 2 клетки, аттака равна ', strong.attack) //get attack

const bond = new Daemon('Old','Daemon') // аттака=100, без дурмана
//bond.stoned = true
bond.attack = 2  //set attack      аттака на 2 клетки
console.log ('демон без дурмана аттакует на 2 клетки, аттака равна ',bond.attack)
console.log (bond.attack - strong.attack)