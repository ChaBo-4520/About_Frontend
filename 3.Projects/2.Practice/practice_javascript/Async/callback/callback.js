'use strict'

console.log('1');
setTimeout(()=>{
  console.log('2');
},1000)
console.log('3');

// Synchronous callback
function printImmediately(print){
  print();
}

printImmediately(()=>console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}

printWithDelay(()=>{
  console.log('async callback')
}, 2000);

// Callback Hell example
class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(()=>{
      if(
        (id === 'James' && password === '1234') ||
        (id === 'Mark' && password === '5678')
      ){
        onSuccess(id);
      } else{
        onError(new Error('not found'));
      }
    },2000)
  }
  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'James'){
        onSuccess({name: 'James', role: 'admin'});
      }else{
        onError(new Error('no access'));
      }
    },1000)
  }
};


// 콜백을 연속으로 사용한 결과
// 가독성이 매우 떨어진다.
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user)=>{
    userStorage.getRoles(
      user,
      (userWithRole)=>{
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error)=>{
        console.log(error);
      }
    )
  },
  (error) =>{console.log(error)}
)