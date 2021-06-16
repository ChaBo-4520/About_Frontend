'use strict'
// 😈 -> ✨✨✨✨
// 콜백지옥 => clean code 
// Callback Hell example
// class UserStorage{
//   loginUser(id, password, onSuccess, onError){
//     setTimeout(()=>{
//       if(
//         (id === 'James' && password === '1234') ||
//         (id === 'Mark' && password === '5678')
//       ){
//         onSuccess(id);
//       } else{
//         onError(new Error('not found'));
//       }
//     },2000)
//   }
//   getRoles(user, onSuccess, onError){
//     setTimeout(()=>{
//       if(user === 'James'){
//         onSuccess({name: 'James', role: 'admin'});
//       }else{
//         onError(new Error('no access'));
//       }
//     },1000)
//   }
// };
// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(
//   id,
//   password,
//   (user)=>{
//     userStorage.getRoles(
//       user,
//       (userWithRole)=>{
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//       },
//       (error)=>{
//         console.log(error);
//       }
//     )
//   },
//   (error) =>{console.log(error)}
// )

// Promise

// clean code
// class UserStorage{
//   loginUser = (id, password) => {
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         if(
//           (id === 'james' && password === '1234') ||
//           (id === 'Mark' && password === '5678')
//         ){
//           resolve(id);
//         } else{
//           reject(new Error('not found'));
//         }
//       },2000);
//     });
//   }

//   getRoles(user){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         if(user === 'james'){
//           resolve({name: 'james', role: 'admin'});
//         }else{
//           reject(new Error('no access'));
//         }
//       },1000);
//     });
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage
//   .loginUser(id,password)
//   .then((user) =>{
//     return userStorage.getRoles(user);
//   })
//   .then((user) =>{
//     alert(`Hello ${user.name}, you have a ${user.role} role`)
//   })
//   .catch(console.log);

// Async & Await

class UserStorage{
  loginUser = (id, password) => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(
          (id === 'james' && password === '1234') ||
          (id === 'Mark' && password === '5678')
        ){
          resolve(id);
        } else{
          reject(new Error('not found'));
        }
      },2000);
    });
  }

  getRoles(user){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(user === 'james'){
          resolve({name: 'james', role: 'admin'});
        }else{
          reject(new Error('no access'));
        }
      },1000);
    });
  }

  async getUserWithRoles(userid, password){
    const user = await this.loginUser(userid,password);
    const roles = await this.getRoles(user);

    return roles;
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.getUserWithRoles(id,password)
  .then(console.log)
  .catch(console.log);