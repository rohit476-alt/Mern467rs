function mksqr (n){
    console.log(this)
    return  n*n
}
const sq1 = mksqr(10)

const ansqr = function (n){
    return n*n
}
    
    const sq2 = ansqr(10)
    const arrw1 =  (n)=> {
        console.log (this)
        return n*n
    }
        const sq3 = arrw1(10)
        const arrw2 = n=>n*n
        const sq4 = arrw2 (10)

    
       