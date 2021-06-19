# Vue.js 시작하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Vue.js Sample</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">{{ message }}</div>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue.js!",
        },
      });
    </script>
  </body>
</html>

```

#### Vue Instance

인스턴스는 Vue.js로 화면을 개발하기 위해 꼭 생성해야 하는 필수 단위이다.

Vue instance는 관례적으로 변수명을 vm을 사용한다.

**Vue Instance 생성자**

Vue 생성자 함수를 이용하여 인스턴스를 생성하는 방법은 아래와 같다.

```js
new Vue({
  // instance option properties
});
```

Vue 객체를 생성할 때 아래와 같이 *data, template, el, methods, life cycle hook* 등의 **인스턴스 옵션 속성**을 포함할 수 있다.

각각의 인스턴스 옵션은 $를 이용해 접근가능하다.

```js
let data ={ a: 1}
let vm = new Vue({
    template: "",
    el:"",
    methods:{},
    data:data,
    // ...
})

vm.$data === data // true
```

**데이터**

Vue인스턴스가 생성될 떄, `data`객체에 있는 모든 속성이 반응형 시스템에 추가된다. 각 속성값이 변경될 때 뷰가 "반응"하여 새로운 값과 일치하도록 업데이트 된다.

유의할 점은 `data`에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 **반응형**이다. 따라서 빈 값이거나 존재하지 않은 상태로 시작하는 `data`값은 아래와 같이 초기값을 지정할 필요가 있다.

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

**예외**

```js
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

`Object.freeze()`를 이용하면 기존 속성인 obj가 변경되는 것을 막아 반응성 시스템이 추적할 수 없다.







#### Vue Instance 라이프싸이클 초기화

인스턴스가 생성될 때 아래의 초기화 작업을 수행한다.

- 데이터 관찰
- 템플릿 컴파일
- DOM 에 객체 연결
- 데이터 변경시 DOM 업데이트

이 초기화 작업 외에도 개발자가 의도하는 커스텀 로직을 아래와 같이 추가할 수 있다

```js
new Vue({
    data:{
        a: 1
    },
    created: function(){
        console.log("a is: " + this.a);
    }
})
```

위 `created` 이외에도 라이프싸이클 단계에 따라 `mounted`, `updated`, `destroyed` 등을 사용할 수 있다. 이 라이프싸이클 초기화 메서드로 커스텀 로직을 수행하기 때문에 뷰에서는 따로 Controller를 갖고 있지 않다.