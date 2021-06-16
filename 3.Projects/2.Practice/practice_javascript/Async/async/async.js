'use strict'

// 1. async

async function fetchUser(){
  // do network request in 10 secs...
  return 'james';
}

const user = fetchUser();
console.log(user);


// 2. await

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay (2000);
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  return '🍌';
}

async function pickFruits(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then((res)=>{
    return res.join(' + ');
  });
}

pickAllFruits().then(console.log);

// function pickOnlyOne(){
//   return Promise.race([getApple(),getBanana()]);
// }

// pickOnlyOne().then(console.log);