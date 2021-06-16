// 1. String concatenation

console.log('my'+'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numerinc operators

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter
const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1


// 4. Assignment operators
let x = 3;
let y = 6;
x += y ; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10<6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||, &&, !
const value1f = false;
const value1t = true;
const value2 = 4 < 2;

//  ||, find the first truty value
// or은 처음으로 true를 만나면 true를 리턴한다. 
// 따라서 or1은 value1t가 
// true이므로 뒤의 check()를 실행하지 않는다.
// 하지만, or2는 value1f, value2가 false이므로 check()를 실행해
// true를 리턴할때까지 출력하지 못한다.
// 따라서 가장 심플하게 값을 리턴받는 값 순서대로 배치하는 것이 바람직하다.
console.log(`or1 : ${value1t || value2 || check()}`);

console.log(`or2 : ${value1f || value2 || check()}`);

function check(){
  for (let i = 0; i < 10; i++){
    console.log('wasting time....');
  }
  return true;
}

//  &&, find the first falsy value
// and는 처음으로 false를 만나면 false를 리턴한다.

// and often used to compress long if-statement
// nullableObject && nullableObject.something
// 위의 형식으로 선언하여 오브젝트 값이 null이 아닐때만 something를 받아온다.

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const obj1 = { name : 'a' };
const obj2 = { name : 'b' };
const obj3 = { name : 'c' };
// object는 reference로 저장되기 때문에 안의 값이 같아도 reference가 다르다
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// ex
console.log('example');
console.log( 0 == false); // true
console.log( 0 === false ); // false
console.log('' == false); // true
console.log( '' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional operators: if
// if, else if, else
const name = 'A';
if(name === 'A'){
  console.log('Hello A!');
}
else if(name === 'B'){
  console.log('Hello B!');
}
else{
  console.log('Who are you?');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'A'? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
  case 'Chrome':
  case 'Firefox':
    console.log('Good Browser');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while(i>0){
  console.log(`while: ${i}`);
  i--;
}

do{
  console.log(`while: ${i}`);
  i--;
}while(i>0);


// for loop, for(begin; condition; step)

for(let i = 3; i > 0;i--){
  console.log(`for : ${i}`);
}

// nested loops


for(let i = 3; i > 0;i--){
  for(let j = 0 ; j <3;j++){
    console.log(`for : ${i}`);
  }
}

for(let i = 0 ; i <=10;i++){
  if(i%2) continue;
  console.log(i);
}

for(let i = 0 ; i <= 10; i++){
  console.log(i);
  if(i==8)break;
}