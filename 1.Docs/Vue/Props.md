# Props

### 부모와 자식 컴포넌트 관계

컴포넌트 관계도에서 상-하 관계에 있는 컴포넌트의 통신은

- 위에서 아래로는 데이터(props)를 내리고
-  아래에서 위로는 이벤트를 올린다(event emit)

<img src="C:\Users\MSI\Desktop\Career\Study\SW_Study\About_Frontend\2.Pictures\parent-child-relationship.png">

#### Props

props는 상위 컴포넌트에서 하위 컴포넌트로 내리는 데이터 속성을 의미한다. 이렇게 하는 이유는 모든 컴포넌트가 각 컴포넌트 자체의 스코프를 갖고 있어 다른 컴포넌트의 값을 바로 참조할 수 없기 때문이다.

```html
!-- 상위 컴포넌트 -->
<div id="app">
  <!-- 하위 컴포넌트에 상위 컴포넌트가 갖고 있는 message를 전달함 -->
  <child-component v-bind:propsdata="message"></child-component>
</div>
```

```js
// 하위 컴포넌트
Vue.component("child-component", {
  // 상위 컴포넌트의 data 속성인 message를 propsdata라는 속성으로 넘겨받음
  props: ["propsdata"],
  template: '<p>{{ propsdata }}</p>'
});

// 상위 컴포넌트
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! from Parent Component"
  }
});

```

***주의할 점: props 변수 명을 카멜 기법(aBow)으로 정의하면 html 태그에서 사용할 때는 케밥 기법(`-`)으로 선언해야 한다. 아래는 만약 프롭스 속성 명을 카멜 기법인 passedData로 선언했을 때의 주의 메시지***

<img src="C:\Users\MSI\Desktop\Career\Study\SW_Study\About_Frontend\2.Pictures\props-name-parsing-tip.png">

```html
!-- 상위 컴포넌트 -->
<div id="app">
  // 2. html 태그안에서는 케밥 표기법으로 지정해야한다.
  <child-component v-bind:props-data="message"></child-component>
</div>
```

```js
Vue.component("child-component", {
   // 1. props 변수명을 카멜표기법으로 지정했을때,
  props: ["propsData"],
  template: '<p>{{ propsData }}</p>'
});

// 상위 컴포넌트
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! from Parent Component"
  }
});
```
