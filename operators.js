const a = 10;
const b = 20;
let x = 10;

console.log('Equality' + (a==b))
console.log('Not Equals' + (a!=b))
console.log('GT' + (a>b))
console.log('GTE'  +(a>=b))
console.log('LT' + (a<b))
console.log('LTE' + (a<=b))

console.log('Subtract' + (a-b))
console.log('ADD' + (a+b))
console.log('post Inc'  +(x++)) //x=x+1
console.log('Exponent' + (a**x))
console.log('Bitwise And' + (a&1))
console.log('Bitwise or' + (a|1))
console.log('Shift operators' + (a>>b))
console.log('Shift operators' + (a<<b))

console.log('logical And 1' + (10&&1))
console.log('logical And 0' +(10&&0)) 
console.log('logical or 0'+(10||0))
console.log('logical or 1'+(10||1))

console.log('Ternary operator :'+(1 ?'success':'fail'))
const st = (a>10)? ' success': 'fail'
console.log('Ternary operator:'+ st)

const Nums = [1,3,4,6,10]
console.log('Relational.In:'+(a in Nums))

const obj = {
    1 :  'abc',
    2 :  'acc',
    10 :  'xyz',
}
 console.log('Relation object In :'+(a in obj))