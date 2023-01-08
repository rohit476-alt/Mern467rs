const arr = [1,2,5,6,-1,8]
const ttl = arr.reduce(
    (prv, curr) => {
             console.log (`Prev ${prv},Curr ${curr}`)
             return (prv + curr)

    },
    0
)

console.log(ttl)
