# computed와 watch

> 

### Computed

​	템플릿 내에 표현식을 넣으면 편리하다. 하지만 간단한 연산일 때만 이용하는 것이 좋다. 너무 많은 연상을 템플릿 안에서 하면 코드가 비대해지고 유지보수가 어려워진다.

```html
<div id="example">
    {{ message.split('').reverse().join('') }}
</div>
```

위와 같이 템플릿 내에 복잡한 표현식을 넣으면 가독성이 매우 떨어진다. 이것이 `computed`속성을 사용해야 하는 이유이다.

```html
<div id="example">
    <p> 원본 메시지: "{{ message }}" </p>
    <p> 역순으로 표현한 메시지: "{{ reversedMessage }}</p>
</div>
```

```js
let vm = new Vue({
    el:"#example",
    data:{
        message: 'Hello!',
    },
    computed:{
        reversedMessage(){
            return this.message.split('').reverse().join('')
        }
    }
})
```

<img src="../../2.Pictures/computed.jpg">

computed안의 `reversedMessage`함수는 `vm.reversedMessage`의 getter로 사용된다.

따라서 템플릿 안에서 `computed`을 바인딩할 수 있다.

#### computed vs methods

methods에서 이와 유사한 동작을 수행할 수 있다.

```html
<p> 역순으로 표현한 메시지: "{{ reversedMessage }}</p>
```

```js
...
methods:{
    reversedMessage(){
        return this.message.split('').reverse().join('')
    }
}
```

위의 computed와 동일한 결과를 출력한다.

**차이점**

`computed`속성은 종속 대상을 따라 저장(캐싱)된다. computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행한다. 즉 `message`가 변경되지 않는 한, computed속성인 `reversedMessage`를 여러번 요청해도 계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환한다.

따라서 `Date.now()`처럼 아무 곳에도 의존하지 않는 computed속성의 경우 절대로 업데이트 되지 않는다.

`methods`는 메소드를 호출하면 렌더링을 다시 할 때마다 항상 함수를 실행한다.

**결론**

캐싱을 원하는 경우 computed를 사용하고 캐싱을 원하지 않는 경우 methods를 사용할 것.

### computed속성의 setter함수

computed 속성은 기본적으로 getter 함수만 가지고 있지만, 필요한 경우 setter 함수를 만들어 쓸 수 있다.

```js
...
computed: {
  fullName: {
    // getter
    get(){
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
...
```

### Watch

Vue의 인스턴스의 데이터 변경을 관찰하고 이에 반응하는 속성이다. 하지만 일반적으로 computed를 사용하는 것이 좋다. watch는 parameter로 변경된 값을 받는다.

#### computed vs watch

```html
<div id="demo"> {{ fullName }}</div>
```

**watch**

```js
let vm = new Vue({
    el: "#demo",
    data() {
        return {
            firstName: "Foo",
            lastName: "Bar",
            fullName: "Foo Bar",
        };
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + " " + this.lastName;
        },
        lastName: function (val) {
            this.fullName = this.firstName + " " + val;
        },
    },
});
```

해당 코드는 매우 반복적이고 비효율적이다.

**computed**

```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

computed를 사용하면 훨씬 간결하게 표현이 가능하다.



대부분의 경우 computed 속성이 더 적합하지만 watch가 필요한 경우가 있다. watch는 데이터 변경데 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용하다.

**예제**

```html
<div id="watch-example">
  <p>
    yes/no 질문을 물어보세요:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

```js
<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '질문을 하기 전까지는 대답할 수 없습니다.'
  },
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    question: function (newQuestion) {
      this.answer = '입력을 기다리는 중...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
      // 입력하는 동안 500ms 초과시 콜백함수를 동작시키는 API
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)'
        return
      }
      this.answer = '생각중...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
        })
    }
  }
})
</script>
```

위와 같이 watch를 사용하면 question이 변경될 때 마다 최종 응답을 얻기 전까지 중간 상태를 설정할 수 있다. 또한, 비동기 연산을 수행할 수 있다?(조사필요)



computed에서는 computed속성으로 설정한 대상을 실제 템플릿에 포함하지 않으면 computed 대상안의 함수가 실행되지 않는다.

**결론**

computed는 이미 정의된 계산식에 따라 결과값을 반환할 때 사용하고, watch는 특정 조건에서 함수를 실행시키기 위한 트리거로서 사용한다.

#### deep옵션

```html
<div id="app">
    <p>{{ count.value }}</p>
    <button @click="decrease">카운트감소</button>
</div>
```

```js
data() {
    return {
        count: {
            value: 3,
        },
    };
},
```

watch속성이 적용된 값이 object일 경우 object안의 값이 변경되는 경우 감지하지 못하는 문제점이 있다.

```js
watch: {
    count(newVal){
        if (newVal.value == 0) {
            alert("값이 0이 되었습니다!");
            this.count.value = 3;
        }
    },
},
```

위와 같이 코드를 작성하게 되면 count.value값이 바뀌더라도 watch가 동작하지 않는다.

```js
...

watch: {
    count: {
        deep: true,
        handler(newVal) {
            if (newVal.value == 0) {
                alert("값이 0이 되었습니다!");
                this.count.value = 3;
            }
        },
    },
},
    
...
```

위와 같이 deep 옵션을 true로 지정하고 handler을 통해 동작을 지정하면 내부값이 바뀌더라도 이를 감지할 수 있다.









