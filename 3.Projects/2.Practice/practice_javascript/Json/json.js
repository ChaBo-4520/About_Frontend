// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
  name: 'James',
  color : 'white',
  size: null,
  birthDate: new Date(),
  jump:()=>{
    console.log(`${name} can jump!`);
  },
}
// JSON으로 변환하면 symbol과 jump메소드는 JSON에 포함되지 않는다.(rabbit의 데이터가 아니기때문?)
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

json = JSON.stringify(rabbit,(key, value)=>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'Mark' : value;
});

console.log(json);


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key,value)=>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate'? new Date(value) : value;
})
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());