test('game classes', () => {
    const {Daemon,Magician,} = require('../gameclasses.js')
    const strong = new Magician('Strong','Magician') // аттака=100, без дурмана
    strong.stoned = true //set stoned     маг под дурманом
    strong.attack = 2 //set attack        аттака на 2 клетки

    const bond = new Daemon('Old','Daemon') // аттака=100, без дурмана
    bond.attack = 2  //set attack      аттака на 2 клетки
    const received = bond.attack - strong.attack

    const expected = 5
    
    expect(received).toEqual(expected)
});