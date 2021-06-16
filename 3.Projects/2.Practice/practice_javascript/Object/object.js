const user1 = {name: 'James', age: 20};
const user2 = {name: 'Bob', age: 22};

const user3 = {};
Object.assign(user3, user1);
console.log(user3); // { name: 'Smith', age: 20};
// 방법2
const user4 = Object.assign({}, user1);
console.log(user4); // { name: 'Smith', age: 20};
console.clear();
console.log(user1); 
console.log(user2); 
const user5 = Object.assign({},user1,user2);
console.log(user1); 
console.log(user2); 
console.log(user5); 