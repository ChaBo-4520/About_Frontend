const array = ['🍕','🍔','🍟','🌭','🍿','🧂','🥓'];

// Looping
for(value of array){
  console.log(value);
}

for(let i = 0 ; i < array.length;i++){
  console.log(array[i]);
}

array.forEach(function(value, index, array){
  console.log(value);
  console.log(index);
})

console.clear();
const arr1 = [1,2,3,4,5];
console.log(arr1.indexOf(4)); // 1