const mp = new Map ([
    [0,'Zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'Three']
])
mp.set(4,'Four')
console.log(mp)

console.log(`Element At 3 ${mp.get(3)}`)
mp.delete(1)
console.log(mp)
