class User{
  constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }
  get age(){ // getter
      console.log("getter!")
      return this._age;
  }
  set age(value){ // setter
    console.log("setter!")
      this._age = (value < 0) ? 0 : value;
  }
}


console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Shape); // true
console.log(rectangle instanceof Object); // true