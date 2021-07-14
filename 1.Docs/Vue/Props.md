# Props

### Props

#### 부모와 자식 컴포넌트 관계

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

***주의할 점: JavaScript에서 props 변수 명을 카멜 기법(aBow)으로 정의하면 html 태그에서 사용할 때는 케밥 기법(`-`)으로 선언해야 한다. 아래는 만약 프롭스 속성 명을 카멜 기법인 passedData로 선언했을 때의 주의 메시지***

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

#### prop의 적절한 사용

props는 단방향 바인딩을 형성한다. 즉 상위 속성이 업데이트되면 하위 속성에 전달되지만 그 반대는 안된다. 이는 하위 컴포넌트가 실수로 부모의 상태를 변경하여 데이터 흐름을 추론하기 어렵게 만드는 것을 방지한다.

prop은 다음과 같이 사용하는 것이 적절하다.

1. prop의 초기 값을 초기 값으로 사용하는 로컬 데이터 속성을 정의한다.

   ```js
   props:['initialCounter'],
   data(){
       return{
           counter:this.initialCounter
       }
   }
   ```

2. prop 값으로 부터 computed를 정의한다.(변경되어 사용되어야 할 경우)

   ```js
   props:['size'],
   computed:{
       normalizedSize(){
           return this.size.trim().toLowerCase()
       }
   }
   ```

#### prop 검증

컴포넌트가 받는 중인 prop에 대한 요구사항을 지정할 수 있다. 요구사항이 충족 되지 않으면 Vue에서 경고를 내보낸다. **개발자가 컴포넌트 제작시 사용.**

props로 문자열 배열 대신 유효성 검사 요구사항이 있는 개체를 사용할 수 있다.

```js
props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100
    },
    // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
    propE: {
      type: Object,
      default(){
        return { message: 'hello' }
      }
    },
    // 사용자 정의 유효성 검사 가능
    propF: {
      validator(value){
        return value > 10
      }
    }
}
```

`type`은 다음 네이티브 생성자 중 하나를 사용할 수 있다.

- String
- Number
- Boolean
- Function
- Object
- Array
- Symbol

#### v-on을 이용한 사용자 지정 이벤트

```html
<p>{{ total }}</p>
<button-counter @increment="incrementTotal"></button-counter>
<button-counter @increment="incrementTotal"></button-counter>
```

**button-counter 컴포넌트(자식)**

```js
Vue.component("button-counter", {
    template: '<button @click="incrementCounter">{{ counter }}</button>',
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        incrementCounter() {
            this.counter += 1;
            this.$emit("increment");
        },
    },
});
```

**부모 컴포넌트**

```js
let vm = new Vue({
    el: "#app",
    data() {
        return {
            total: 0,
        };
    },
    methods: {
        incrementTotal() {
            this.total += 1;
        },
    },
});
```

- $emit
  - $emit(이벤트이름)으로 '이벤트이름'에 해당하는 이벤트를 트리거한다.
- v-on
  - 자식컴포넌트에 v-on:자식에서의 이벤트이름 = 연결할 이벤트이름 의 형식으로 트리거시킬 이벤트를 연결한다.

***Vue3.0버전 추가***

3.0.에서 props와 같이 emits라는 옵션을 추가할 수 있다.

기존과 차이점은 거의 없으나 해당 인스턴스에서 어떤 emit을 사용할 지 미리 정의해서 가독성을 높일 수 있다.

```js
.....
props:['A','B']
// or
props:{
    A:String,
    B:Number,
}
    
    
    
emits:['count','setText'],
```

*props는 Array형식과 json형식을 사용할 수 있었지만 emit은 Array형식만을 사용한다.*

#### `.native`

컴포넌트에서 Vue인스턴스의 이벤트를 바인딩 하고자 한다면, .native를 사용해 연결한다.

#### `.sync`수식어

prop을 이용한 양방향 바인딩을 하고싶을 때가 있다. 실제 양방향 바인딩을 가능케 하면 부모, 자식 중 어디서 데이터 변경이 발생했는지 특정하기 어렵다. 

 때문에 이벤트를 emit할 때, `update:myPropName` 패턴이 권장된다.

```js
this.$emit('update:propname',newValue)
```

그러면 부모 요소는 이벤트를 감지하여 로컬 data속성을 업데이트 할 수 있다.

```html
<my-component
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></my-component>
```

이와 같은 패턴을 `.sync`수식어를 이용하여 줄여서 표현할 수 있다.

**parent**

```html
<msg-box :msg_child.sync="msg_parent"></msg-box>
```

**child**

```html
<input type="text" :value="msg_child" @input="updateMsg_child"/>
```

```js
props: ["msg_child"],
methods: {
	updateMsg_child(event) {
        this.$emit("update:msg_child", event.target.value);
	},
},
```

이제 msg_parent와 msg_child는 양방향 바인드 된 것 처럼 동작한다.





