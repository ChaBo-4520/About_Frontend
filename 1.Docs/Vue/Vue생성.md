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

**Vue Instance 생성자**

Vue 생성자 함수를 이용하여 인스턴스를 생성하는 방법은 아래와 같다.

```js
new Vue({
  // instance option properties
});
```

Vue 객체를 생성할 때 아래와 같이 *data, template, el, methods, life cycle hook* 등의 **인스턴스 옵션 속성**을 포함할 수 있다.

```js
new Vue({
    template: "",
    el:"",
    methods:{}
    // ...
})
```

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