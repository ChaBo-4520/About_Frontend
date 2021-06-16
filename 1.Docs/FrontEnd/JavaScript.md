# JavaScript

###  **Web API**

- javascript에 포함된 것이 아니라 브라우저에서 제공하고 이해하는 함수들.

### **async vs defer**

- html에 javascript를 포함하는 방법
- head에 포함하기
  - head에 javascript를 포함하면, html을 파싱해서 dom을 만들어 나가다가 javascript를 만나면 이를 서버로부터 다운(fetching)하고 실행시킨 뒤 나머지 dom을 만든다. 이렇게 설계하면 javascript의 크기가 큰 경우, Dom을 만드는 과정이 중단되는 시간이 길기 때문에 페이지가 로드되는데 오래걸린다.
- body의 끝에 포함하기
  - body의 끝에 javascript를 포함하면, DOM을 모두 만든 뒤 javascript를 다운, 실행하기 때문에 사용자는 빠르게 페이지를 볼 수 있다. 하지만 페이지가 javascript에 많이 의존하는 경우 사용자는 잘못된 페이지를 본다는 문제점이 발생한다.
- head + async
  - script태그에 async를 true로 해주면 DOM을 만드는 도중 script를 발견하고 비동기적으로 서버로부터 javascript를 다운받는다(파싱은 멈추지않음). 다운이 완료되면 파싱을 멈추고 javascript를 실행시킨다. head에 단순 포함하는 것 보다 빠르지만 javascript가 실행되는 순간에 파싱되지 않은 나머지 html 때문에 문제가 발생 할 수 있다. ex) javascript에서 queryselector등을 사용할 때 아직 불러오지 않은 element등을 찾을 수 없게 된다.
  - script가 여러개 인 경우 async는 먼저 요청한 script가 아닌, 다운이 완료되는 script순서대로 실행하게 된다. 따라서, javascript 실행 순서가 중요한 경우 문제가 발생할 수 있다.
- **defer**(**BEST!**)
  - javascript를 비동기적으로 다운받고, DOM이 모두 만들어져 사용자에게 보여준 뒤 javascript를 실행한다.(가장좋음)
  - script가 여러개 인 경우 defer은 모두 다운 받고 DOM이 모두 만들어 진 후 요청했던 순서대로 실행하게 되어 문제가 발생하지 않는다.

**use strict**

- javascript는 매우 유연한 언어이다. 따라서 자료형을 지정할 필요가없다. 하지만, 이것은 매우 위험하기도 하다. 따라서 use strict를 사용함으로서 자료형을 선언해야 사용할 수 있도록 하는 것이 권장된다. 또한, 엔진이 더 효율적으로 동작하게 된다.

  ```js
  'use strict';
  ...
  a = 6; // 에러
  let a = 6; // 정상
  ```

**scope**

- 변수는 선언된 범위 안에서 사용이 가능하다.
- 따라서 함수나 블록({})안에서 선언된 변수들은 그 안에서만 사용이 가능하고, 함수 종료시 메모리에서 삭제된다. 하지만 최상단에 선언된 global변수들은 프로그램이 시작될 때 메모리에 탑재되고 끝날 때 삭제된다. 따라서 global변수들은 최소한으로 사용하는 것이 좋다.

#### let, var, const

- **let**(Mutable : read and only)

  - javascript의 유일한 변수타입 이다.
  - ES6에서 추가되었으며 let을 사용하는 것이 바람직하다.

- var

  - let등장 이전에 사용하던 것. 지금은 사용하지 않는 것이 권장된다.

  - var을 사용하면 안되는 이유

    - var은 선언하기 전에 사용하고 나중에 선언해도 정상적으로 동작한다.

      ```js
      ...
      a = 'name';
      var a;
      ...
      ```

      var은 호이스팅이 일어나 선언이 가장 위로 올라가기 때문에 에러가 발생하지 않는다.

    - 블록({ })을 무시한다. 블록안에 선언했더라도 블록밖에서 사용이 가능하다.

- **const**(Immutable : read only)

  - 값을 한번 할당한 후에는 값을 바꿀수 없는 자료형이다.

> Note!!
>
> Immutable data types : primitive typer, frozen objects
>
> mutable data types : all objects by default are mutable in JS
>
> immutable를 사용해야 하는 이유
>
> 1. 보안상의 이유 : 해커들이 코드의 값을 변경할 수 없다.
> 2. thread safety : 여러개의 쓰레드가 값을 동시에 변경하는 것을 막기위함?
> 3. human mistakes를 막을 수 있다.

### Variable typers

**Premitive**

premitive는 값이 메모리에 바로 저장된다.

- number : javascript에서는 모든 숫자를 number로 취급한다.

- string : 문자열. 

  - template literals : `(백틱)과 ${}를 이용한다. 

    ```js
    const name = 'chabo';
    const hello = `hi ${name}`; // hello = 'hi chabo'
    ```

- boolean

  - false : 0, null, undefined, NaN, ''
  - true : any other value

- null(값이 null인 것)

  ```js
  let n = null; // n = null
  ```

  

- undefined(값이 할당되지 않은 것)

  ```js
  let u; // u = undefined
  ```

- symbol(고유한 식별자)

  ```js
  // 같은 id가 들어가도 둘은 다르다
  const symbol1 = Symbol('id');
  const symbol2 = Symbol('id');
  console.log(symbol1 == symbol2); // false
  // 안에 들어간 string값에 따라 id 할당을 원하면 for를 붙여준다.
  const symbol1 = Symbol.for('id');
  const symbol2 = Symbol.for('id');
  console.log(symbol1 == symbol2); // true
  
  //symbol값은 출력시 description을 이용한다.
  console.log(`value: ${symbol1.description}`);
  ```

**object**

object는 크기가 크기 때문에 별도의 메모리에 저장되고 해당 object를 가리키는 ref가 메모리에 저장된다.

**function**: javascript는 function도 할당할 수 있다.

**추가** : Infinity, -Infinity, NaN(not a number)

### Dynamic typing : dynamically typed language

> javascript는 런타임에 변수의 자료형들이 결정된다.

이 점은 자료형을 생각하지 않아도 돼서 편리할 수 있지만 사실은 에러를 불러올 수 있다.

```js
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type: ${typeof text}`);// value: hello, type: sting

text = 1;
console.log(`value : ${text}, type: ${typeof text}`);// value: 1, type: number

text = '8'/'2';
console.log(`value : ${text}, type: ${typeof text}`);// value: 4, type: number

console.log(text.charAt(0)); // 에러! text는 런타임 동안 number로 자료형이 바뀌었기 때문에 charAt함수를 사용할 수 없어서 에러가 발생한다.
```

위와 같은 이유 때문에 자료형을 명시해야 하는 TypeScript가 등장하게 되었다.

#### Variable types



### function

> 기본 구조
>
> function name(param1, param2, ...){ body ... return;}
>
> 하나의 function은 하나의 기능만 해야한다.
>
> naming : doSomething, command, verb
>
> javascript에서 function은 object이다.

#### **parameters**

- premitive 파라미터는 값이 전달되지만, object파라미터는 reference가 전달되므로 함수안에서 object의 값이 바뀌면 실제로 object의 값이 바뀌게 된다.

- **default parameter**

  ```js 
  (name = 'abc'){ //name파라미터에 값이 없으면 abc를 default 파라미터로 사용한다.
      
  }
  ```

- **Rest parameter**

  - 파라미터를 배열 형식으로 전달하는 방법

    ```js
    function printAll(...args){// args = ['A','B','C']
        for(let i = 0; i < args.length;i++){
            console.log(args[i]);
        }
        for(const arg of args){
            console.log(arg);
        }
        // 배열에서 각 원소를 선택하는 함수
        args.forEach((arg)=>console.log(arg));
    }
    
    printAll('A','B','C');
    ```

- **scope**

  - 간단하게 안에서는 밖을 볼 수 있고, 밖에서는 안을 볼 수가 없다.

- return

  - return을 명시하지 않으면 자동으로 return undefined;이다.

- 가독성을 높히는 코딩방식

  **Early return, early exit**

  ```js
  function upgradeUser(user){ // 이렇게 설계하면 코드의 가독성이 떨어진다.
      if(user.point > 10){
          ......
      }
      return;
  }
      
  function upgradeUser(user){ // 조건에 맞지않으면 빠르게 return하도록하고 나머지코드를 적는것이 가독성이 좋다.
      if(user.point <= 10) return;
      ........
      .....
      return;
  }
  ```

#### **Function expression**

- function declaration(함수 선언식)

  - function declaration은 호이스팅이 일어나기 때문에 함수가 선언되기 이전에 미리 함수를 호출해도 에러가 일어나지 않는다.

    ```js
    sum(1,2);
    
    function sum(a,b){
        console.log(a + b);
        return;
    }
    ```

- function expressions

  - function expressions는 호이스팅의 영향을 받지 않기 때문에 미리 사용할 수 없다.

    ```js
    sum(1,2); // 에러
    
    const sumAgain = function(a,b){
    	console.log(a + b);
        return;
    }
    ```

#### Callback function

> Callback은 parameter로 function을 넘겨서 상황에 맞게 function을 실행시키는 것

```js
function randomQuiz(answer, printYes, printNo){
    if(answer == 'Love you') printYes();
    else printNo();
}

// 익명함수
const printYes = function(){
    console.log('Yes');
}

// 기명함수
const printNo = function print(){
    console.log('No');
}
```

기명함수는 해당 함수 안에서 재귀를 사용하거나 디버깅을 위해 사용한다.

#### Arrow function

> always anonymous
>
> 익명함수를 화살표를 이용하여 간단하게 표현

```js
const simplePrint = function(){
    console.log('simplePrint!');
}
// 위의 함수를 Arrow function으로 표현
const simplePrint = () => console.log('simplePrint!');

const add = (a,b) =>{
    return a + b;
}
```

#### IIFE

> Immediately Invoked Function Expression
>
> 함수를 표현과 동시에 실행하는것

```js
(function hello(){
    console.log('IIFE');
})();
```

### Class

> class는 템플릿이고 object는 class를 통해 만든 실제 객체이다.

#### **기본구조**

```js
// class
class Person{
    // constructor(생성자)
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
       	console.log(`${this.name}: hello`);
    }
}

// object
const James = new Person('James',28);
James.speak();
```

#### Getter & Setter

```js
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){ // getter
        return this._age;
    }
    set age(value){ // setter
        if(value < 0){
            thorw Error('age can not be negative');
        }
        this._age = (value < 0) ? 0 : value;
    }
}

const user1 = new User('Steve','Job', -1);
console.log(user1.age); // 0
```

- getter & setter은 사용자의 비정상적인 사용을 막기위해 사용한다.
- user1이라는 객체를 생성할 때, constructor가 실행되면서 각 data에 값을 할당한다.
- 이때, age에 값을 할당하는 것은 setter로 대체된다.
  - 즉, this.age = age => set age(age)가 된다. setter에 의해 this.age = 재설정한 value를 갖게 해주어야 하지만, this.age = 가 다시 setter로 대체되기 때문에 무한루프가 발생하게 된다. 이를 해결하기 위해 this._age로 바꾸어준다. ( '\_'는 관습적 네이밍)
  - 이를 통해 메모리의 age에는 여전히 -1이 들어가 있지만, _age에는 0이 들어가게 된다.
- 이후, user1.age를 실행하면 getter로 대체된다.
  - 즉, get age()가 실행되는데, 이때, setter의 결과로 바뀐 age값을 _age에 저장하도록 했으므로 getter에서 this.\_age를 리턴해줌으로써 비정상적인 사용을 막을 수 있다.
- 이처럼 user.age에 직접적으로 접근하여 변수를 사용하는 것이 아니라 getter과 setter을 통해 접근하게 함으로써 캡슐화가 가능해진다.

#### Public & Private

> 너무 최근에 추가된 것이기 때문에 알고만 넘어가자

```js
class Experiment{
    public Field = 2;
	#privateField = 0;
}
const experiment = new Experiment;
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
```

#### Static

> 알고만 넘어가자

```js
class Article{
    static publisher = 'James';
	constructor(articleNumber){
    	this.articleNumber = articleNumber;
	}

	static printPublisher(){
    	console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // error
console.log(Article.publisher); // James
Article.printPublisher();
```

- Static으로 선언된 data나 함수는 객체에 정의되는 것이 아니라, class내에 정의되는 것이다. 따라서 객체.이름 으로 사용하는 것이 아니라 class.이름으로 사용해야 한다.
- static은 모든 객체가 공통으로 사용해야하는 data나 함수를 정의하는데 사용된다.
- static을 사용함으로써 불필요한 메모리 낭비를 막을 수 있다.

#### 상속 & 다형성

> 상속 : 여러 클래스를 설계할 때, 클래스들이 공통으로 가지고 있는 더욱 추상화된 클래스를 설계하고 그 클래스를 상속받아 새로운 클래스를 설계할 수 있다. 해당 클래스는 상속받은 클래스의 모든 data와 method를 사용할 수 있다.
>
> 다형성 :상속받은 method를 수정하고 싶을 때, 동일한 이름의 method를 선언하고 기능을 수정함으로써 해당 클래스에서는 새로 정의한 method를 사용하게 된다.

```js
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
// extends라는 키워드를 이용해서 Shape가 가지고 있는 모든것을 상속받는다.
class Rectangle extends Shape{}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw(); // drawing blue color of

class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 draw를 호출.
        console.log('🔺');
    }
    getArea(){ // 다형성을 이용해 Triangle에 맞는 getArea로 수정한다.
        return (this.width * this.height)/2;
    }
}
```

overriding을 통해 method를 새로 정의했을 때, 부모의 method를 사용하고 싶다면 super.이름 으로 호출할 수 있다.

### InstanceOf

> 객체이름 instanceof 클래스이름
>
> 을 사용하면 해당 객체가 해당 클래스를 이용해서 만들어진것인지 확인한다.
>
> 리턴값은 boolean

```js
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Shape); // true
console.log(rectangle instanceof Object); // true
```

instanceof는 상속 관계도 true로 리턴한다. javascript의 모든 객체들은 Object라는 클래스를 상속받아 만들어진다.(ctrl + 클릭 으로 정의된 곳으로 이동할 수 있음.)

### Object

> premitive타입은 변수 하나당 데이터를 하나만 담을 수 있다. 이렇게 하면 관계있는 데이터간 연관성을 알기 어렵고, 함수등에서 parameter로 호출 할 때 어려움이 많다. 이를 해결하기 위해 Object를 사용한다.

#### 기본구조

obj는 key와 value 쌍이다.

```js
// object literal
const obj1 = {};
//object constructor
const obj2 = new Object();
```

**특징**

javascript는 런타임 언어이기 때문에 도중에 Object의 원소를 추가, 삭제할 수 있다.

```js
const obj1 = {name:'James',age:4}; // ojb1={name:'James',age:4}

obj1.hasJob = true; // ojb1={name:'James',age:4, hasJob:true};
delete obj1.hasJob; //ojb1={name:'James',age:4}
```

#### 원소에 대한 접근 방법

```js
obj1.name;
obj1['name']; // 이 방식으로 접근할 때는 key를 string로 주어야한다.
```

- . 을 이용한 접근은 개발자가 전달할 키가 정확할 때 사용한다.
- [] 을 이용한 접근은 동적인 입력에 의해 접근해야 할 키가 바뀔 때 사용한다.

```js
function printValue(obj, key){
    console.log(obj.key); // undefined // obj1에 key라는 key가 없기때문
    console.log(obj[key]); // James
}

printValue(obj1,'name');
```

#### 여러개의 obj를 간단하게 만드는 방법

```js
const obj1 = {name: 'A',age: 1};
const obj2 = {name: 'B',age: 2};
const obj3 = {name: 'C',age: 3};
// Property value shorthand
const obj4 = new Person('D',4);

// Constructor function
// 이런 함수는 보통 명사형으로 작성한다.
function Person(name, age){ // this = {name: 'name', age: age}를 만들어 리턴한다.
    this.name;
    this.age;
}

```

### in operator

string 으로 주어진 key가 해당 object에 존재하는 지 확인

```js
console.log('name' in obj1); // true
```

### for...in vs for...of

**for..in**

- for (key in obj)

- obj안에 있는 키들을 하나씩 확인한다.

  ```js
  for (key in obj1){
      console.log(key); // name \n age
  }
  ```

- for...of

- array에 있는 값들을 하나씩 확인한다.

  ```js
  const array = [1,2,3,4,5];
  for (value of array){
      console.log(value);//1 2 3 4 5
  }
  ```

### Cloning

- Obj는 ref가 저장되므로 단순 대입을 하게 되면 cloning가 아닌, 같은 곳을 가리키게 된다.

  ```js
  const user1 = { name: 'James', age:20};
  const user2 = user1;
  
  user2.name = 'Smith';
  
  console.log(user1.name); // Smith
  // user2는 user1과 같은 곳을 가리키고 있기 때문에 user2의 값을 바꾸면 user1도 바뀐다.
  ```

- cloning 를 하기 위해 Object의 assign함수를 이용한다.(ctrl + 클릭으로 레퍼런스 확인)

  ```js
  // 방법1
  const user3 = {};
  Object.assign(user3, user1);
  console.log(user3); // { name: 'Smith', age: 20};
  // 방법2
  const user4 = Object.assign({}, user1);
  console.log(user4); // { name: 'Smith', age: 20};
  ```

  assign(des,src, src)

  assign메소드는 src를 des에 복사하고 des & src를 리턴한다. 이 때 src가 여러개이면 오른쪽에서 왼쪽으로 덮어쓰면서 des에 복사된다.

### Array

> 동일한 특성을 가지는 자료들을 한데 모으는 일종의 바구니
>
> javaScript는 dynamically typed language이므로 자료구조에 다양한 종류의 데이터를 담을 수 있다. but, 안하는게 좋다.

#### 생성방법

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

#### Looping

```js
const arr = [1,2,3,4,5];
// 1. for
for(let i = 0 ; i < arr.length;i++){
    console.log(arr[i]);
}
// 2. for..of
for (value of arr){
    console.log(value);
}
// 3. forEach
arr.forEach((value)=>{
	console.log(value);  
})
    
```

forEach는 콜백함수와 something을 parameter로 받는다(레퍼런스확인필요). 콜백함수는 parameter로 value, index, array를 받는다. 따라서 해당 콜백함수는 익명함수로 작성하고, 익명함수는 arrow function으로 간단히 할 수 있다. 

#### Addition, deletion, copy

```js
// 뒤에서 부터
arr.push(6,7);
arr.pop();
arr.pop();

// 앞에서 부터
arr.unshift(0);
arr.shift();

```

**shift, unshift**

- shift와 unshift는  push, pop에 비해 매우 느리다. 나머지 data의 이동이 필요하기 때문

**splice**

지정한 위치부터 n개를 지운다. (지운 자리부터 데이터 추가도 가능)

```js
// arr.splice(start, deleteCount?, ...추가할 것) 시작위치, 지울 갯수
// ##parameter뒤에 ?가 붙은 경우 optional이다.
```

**concat**

해당 배열뒤에 parameter를 붙여서 리턴한다.

```js
const arr1 = [1,2];
const arr2 = [3,4];
cont newArray = arr1.concat(arr2); // [1,2,3,4];
```

### Searching

**indexOf**

해당 parameter가 존재하는 index를 반환한다. 존재하지 않는 경우 -1

```js
arr1.indexOf(2); // 1
arr1.lastIndexOf(2); 
```

indexOf는 앞에서 부터 data를 찾아 반환하고, lastIndexOf는 뒤에서부터 data를 찾아 반환한다.

**includes**

parameter가 array에 존재하는지 t,f

```js
arr1.includes(1); // true
```

###  JSON

#### HTTP

> Hypertext Transfet Protocol : client가 어떻게 Server과 통신할 수 있는지 정의한 것
>
> 어떻게 Hypertext를 주고받을 수 있는 지 정의한 규약
>
> Client는 Server에 request하고 Server은 response한다.
>
> Hypertext는 문서, 링크, 이미지...등등을 포함

#### AJAX

> Asynchronous JavaScript And XML

- HTTP를 이용해서 Server로부터 리소스를 받아올 수 있는 방법(동적으로 서버에게 정보를 받아오는 기술)

#### XHR

> XMLHttpRequest

#### XML

- HTML같은 Markup언어의 한 종류. 서버와 통신할 때 쓰였지만 요즘에는 거의 사용되지 않고 JSON을 많이 사용한다.

#### JSON

> JavaScript Object Notation
>
> JavaScript의 Object와 같은 구조로 {key : value}쌍으로 구성된다.

**특징**

- 데이터를 주고 받을 때 사용할 수 있는 가장 간단한 포맷이다.
- Text기반 구조.
- 읽기 쉽다.
- 키-값 쌍으로 이루어져있다.
- 데이터를 주고받을 때 serialization을 위해 사용한다.
  - serialization(직렬화)
- 프로그래밍 언어와 플랫폼에 상관없이 사용할 수 있다.

#### Serialize(Object -> JSON)

**JSON.stringify**

- object를 string(JSON)으로 변환 시켜주는 함수

  ```js
  let json = JSON.stringify(['apple','banana']);
  console.log(json); // ["apple", "banana"]
  ```

  JSON은 더블쿼터("")를 사용하는 것이 규격이다.

  ```js
  const rabbit = {
    name: 'James',
    color : 'white',
    size: null,
    birthData: new Date(),
    symbol: Symbol('id'),
    jump:()=>{
      console.log(`${name} can jump!`);
    },
  }
  // JSON으로 변환하면 symbol과 jump메소드는 JSON에 포함되지 않는다.(rabbit의 데이터가 아니기때문?)
  json = JSON.stringify(rabbit);
  console.log(json); // -- 1
  
  json = JSON.stringify(rabbit, ['name','color']);
  console.log(json); // -- 2
  ```

  1의 결과

  ```js
  {"name":"James","color":"white","size":null,"birthData":"2021-06-04T09:11:50.517Z"}
  ```

  JSON으로 변환하면 symbol과 jump메소드는 JSON에 포함되지 않는다.(rabbit의 데이터가 아니기때문?)

  2의 결과

  ```js
  {"name":"James","color":"white"}
  ```

  stringify에 두번째 인자로 array를 넣으면 해당하는 키-값만 뽑아낸다.

- stringify 두번째 인자로 콜백 함수를 전달했을 때,

  ```js
  json = JSON.stringify(rabbit,(key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Mark' : value;
  });
  
  console.log(json);
  ```

  json 에 key : value로 하나씩 값이 저장된다. 콜백함수를 통해 저장될 데이터를 수정할 수 있다. 위 콜백함수에서는 key값이 name인 경우 원래 name을 Mark로 바꾸고 나머지 키에 대해서는 그냥 value를 전달하고 있다.

#### Deserialize(Object -> JSON)

**parse(json)**

```js
const json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump(); // rabbit에 있는 jump는 정상적으로 실행된다.
obj.jump(); // json으로 변환했던 rabbit을 다시 object로 변환한건 jump를 실행할 수 없다.
```

```js
console.log(rabbit.birthDate.getDate()); // rabbit의 new Date()는 getDate()실행이 가능하다.
console.log(obj.birthDate.getDate()); // 하지만 변환과정을 거친 obj의 birthDate는 new Date()가 아닌 단순 문자열이기 때문에 getDate()를 실행할 수 없다.
```

parse도 마찬가지로 콜백함수를 이용하여 세밀한 작업이 가능하다.

```js
const obj = JSON.parse(json,(value, key)=>{
    return key ==='birthDate'? new Date(value): value;
});
```

### Callback

callback함수 : 함수의 parameter로 넘긴 함수를 나중에 실행시키는 것

**synchronous**

Javascript는 synchronous하다. 코드 순서대로 차례대로 실행된다는 뜻(호이스팅된 이후로).

*호이스팅 : var, function declaraion에서 일어나는, 해당 코드를 가장 위로 올리는 동작*

**asynchronous**

비동기적인 실행. 정확하게 어떤 순서로 실행된다는 것이 보장되지 않음.

```js
console.log('1');
setTimeout(()=>{
    console.log('2');
},1000);
console.log('3');
```

결과 : 1 3 (1초뒤) 2

console.log('2')가 더 위에 있지만 비동기적인 실행으로 인해 나중에 실행된다.

**synchronous callback**

```js
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
```

위 코드는 호이스팅에 의해 다음과같이 바뀐다.

```js
// hoisting에 의해 함수 정의가 가장 위로 올라간다.
function printImmediately(print){
  print();
}

console.log('1');
setTimeout(()=>{
  console.log('2');
},1000)
console.log('3');

printImmediately(()=>console.log('hello'));
```

**asynchronous callback**

```js
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}

printWithDelay(()=>{
  console.log('async callback')
}, 2000);
```

*콜백을 연속으로 체이닝하게 되면 가독성이 매우 떨어지고 유지보수가 힘들어진다.*

### Promise

> 비동기를 간편하게 처리하도록 도와주는 Object.
>
> 정해진 장시간의 기능을 수행하고 성공하면 성공 메세지와 함께 처리결과를 전달하고, 기능 수행중 예상치 못한 문제 발생시 에러를 전달한다.
>
> *Javascript에서 시간이 오래 걸리는 작업(network통신, read files등...) 은 비동기적으로 처리해야 다음줄의 코드들을 멈추지않고 실행할 수 있다.*

**개요**

Promise Object는 Javascript안에 내장되어 있다. 비동기 동작에 callback대신으로 유용하게 사용될 수 있다.

#### **state**

- 프로미스의 상태(state)는 지정한 operation을 수행 중 일때는 **pending**상태가 된다.
- operation을 성공적으로 끝내고 나면 **fulfiled**가 된다.
- 파일을 찾을 수 없거나 네트워크에 문제가 생긴다면, **rejected**상태가 된다.

#### Producer vs Consumer

- **Producer**

  ```js
  // 기본구조 
  
  const promise = new Promise((resolve, reject)=>{
    // doin some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=>{
      resolve('james');
      // reject(new Error('no network'));
    },2000);
  });
  // 결과 : promise라는 Promise 객체를 생성하는 것 자체만으로 excutor(콜백함수)를 실행하게 된다. 주의가 필요.
  ```

  - Promise는 두개의 callback함수를 Parameter로 가지는 excutor(콜백함수)를 Parameter로 가진다.
  - excutor는 Promise생성과 동시에 한번 실행된다.
  - excutor에 전달한 두개의 콜백함수중 첫번째는 Promise동작 성공시 콜백한다.
  - 두번째는 Promise동작 실패시 콜백한다.

- **Consumer**

  ```js
  promise
    .then((value)=>{
      console.log(value);
    })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      console.log('finally');
    })
  ```

  - Promise를 실행하고 첫번째 콜백함수가 실행되면 .then이 실행되고, 두번째 콜백함수가 실행되면 .catch가 실행된다. .filnally는 결과에 상관없이 무조건 실행된다.
  - *then, catch는 promise를 리턴하기때문에 뒤에 연결해서 사용할 수 있다.*

- **Promise Chaining**

  ```js
  // producer
  const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(1);
    },1000);
  });
  
  // consumer
  fetchNumber
    .then((num)=>{
      return num * 2;
    })
    .then(num=>num*3)
    .then(num =>{
      return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
          resolve(num - 1);
        }, 1000);
      })
    })
    .then(num=>console.log(num));
  ```

  - then은 값을 리턴할 수도 있고, 또 다른 Promise를 리턴 할 수도 있다.

- **Error Handling**

  ```js
  const getHen = ()=>
    new Promise((resolve,reject)=>{
      setTimeout(()=>resolve('🐓'), 1000);
    });
  
  const getEgg = (hen)=>
    new Promise((resolve,reject)=>{
      setTimeout(()=>reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
  
  const cook = egg =>
    new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(`${egg} => 🍳`), 1000);
    });
  
  
  getHen() // ---- 1
    .then(getEgg) // 넘어오는 parameter가 하나이고 바로 사용한다면 이와같이 작성가능
    .then(egg => cook(egg))
    .then(console.log)
    .catch(console.log); 
  
  getHen() // ---- 2
    .then(getEgg) // 넘어오는 parameter가 하나이고 바로 사용한다면 이와같이 작성가능
    .catch(error =>{
      return '🌭';
    })
    .then(egg => cook(egg))
    .then(console.log)
    .catch(console.log);
  ```

  - 1 결과 

    ```
    Error: error! 🐓 => 🥚
    ```
    Promise Chaining이 진행되는 도중. reject가 실행되면 사이에있는 then을 다 무시하고 catch로 넘어가게된다.

  - 2 결과

    ```
    🌭 => 🍳
    ```

    따라서 해당 Promise의 then과 catch를 붙여서 최종 결과를 위한 에러처리를 해줘야 한다.

    예를 들어, 해당 코드에서는 달걀을 얻어오는 과정에서 error가 발생하면 대신 빵을 넘김으로서 요리를 최종적으로 완성하는 것이다.

#### callback hell => promise

**callback hell**

```js
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

```

**Promise**

```js
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
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id,password)
  .then((user) =>{
    return userStorage.getRoles(user);
  })
  .then((user) =>{
    alert(`Hello ${user.name}, you have a ${user.role} role`)
  })
  .catch(console.log);
```

class의 각 메소드마다 callback function을 Parameter로 받을 필요가 없다. 단, 각 메소드는 Promise를 리턴해 줘야 한다. then 안에서도 Promise를 리턴해줘야 다음 then이 실행된다.

***callback만으로 작성했을 때 보다 훨씬 가독성이 좋다.***



### Async, Await

> Promise를 간결하고 간편하고 동기적으로 실행되는 것 처럼 만들어준다.
>
> 그렇다고 모든 promise를 async, await으로 바꾸는 것은 아니다. 상황에 맞게 선택해서 사용해야 한다.

**기본구조**

await를 사용해야 하는 함수 앞에 async를 붙인다.

```js

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay (1000);
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  throw 'error';
  return '🍌';
}
```

***순차처리***

```js
async function pickFruits(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

***병렬처리***

getApple과 getBanana는 서로 연관이 없는 동작인데 await를 이용해 기다리게 하면 순서대로 1초, 1초를 기다리게 된다.

```js

async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

- Promise는 선언하는 것 만으로 실행되기 때문에 병렬 처리를 위해서 ~~promise에 정의하고, 이후 await를 이용해서 싱크를 맞춰준다.
- 동작시간 : 총 1초

#### Promise APIs

#### Promise.all

- Promise의 API인 Promise.all을 사용하면 병렬처리를 더 쉽게 할 수 있다.

  ```js
  function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(
      fruits => fruits.join(' + ')
    );
  }
  
  pickAllFruits().then(console.log);
  ```

  - all의 parameter로 여러개의 promise들이 담긴 array를 넘겨주면 모든 promise가 처리된 이후 동작한다.

#### Promise.race

- all과 마찬가지로 parameter로 여러개의 promise들이 담긴 array를 넘겨주면, 그 중 가장 먼저 처리가 완료된 결과를 반환한다.

  ```js
  function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
  }
  // 만약 getApple이 2초, getBanana가 1초가 걸리면
  pickOnlyOne().then(console.log); // 결과 : 바나나
  ```

### callback hell => Promise(with async,await)

```js
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
```

기존에 만들었던 메소드들을 getUserwithRoles라는 async함수 안에 await를 이용하여 순차적으로 실행될 수 있도록 작성한다.

### Tip

- **참고 사이트**
  - Javascript 공부 사이트 : https://ko.javascript.info/
  - **거의공식사이트**(https://developer.mozilla.org/ko/docs/Web/JavaScript)
  - **javascript레퍼런스**(https://developer.mozilla.org/ko/docs/web/JavaScript/Reference)
  - **JSON간 차이점을 찾아줌** : http://www.jsondiff.com/
  - **JSON 포맷을 자동으로 만들어줌** : https://jsonbeautifier.org/
  - **JSON을 Object로 표현해줌** : https://jsonparser.org/
  - **JSON이 올바른지 확인해 줌** : https://tools.learningcontainer.com/json-validator/
- **용어**
  - jQuery
  - BABEL: 최신 버전의 ECMA스크립트로 작성된 Javascript를 5나 6로 변환 시켜주는 트랜스 컴파일러(최신 버전의 ECMA스크립트를 사용할 수 없는 사용자들을 위해)  
  - SPA : 하나의 페이지 안에서 데이터를 받아와 업데이트하는 방식의 애플리케이션. javascript만으로 구현이 가능하지만 조금 더 쉽게 만들기 위해 React, Angular, Vue등이 등장했다. 
  - nodejs : javascript 엔진을 이용한 백엔드에서 서비스를 구현할 수 있도록 만들어짐. javascript엔진이 있기 때문에 브라우저 없이도 javascript코드를 실행할 수 있다.

