## Vue Template

> 템플릿이란 뷰로 화면을 조작하기 위해 제공되는 문법이다. 뷰 인스턴스에서 관리하는 데이터를 화면에 연결하는 데이터 바인딩과 화면의 조작을 편하게 할 수 있는 디렉티브로 나뉜다.

#### Data Binding

콧수염 문법인 “{{ }}”를 활용하여 인스턴스의 data, computed, props 속성을 연결할 수 있다. 그리고 간단한 자바스크립트 표현식도 화면에 표시할 수 있다.

```html
<div>{{ str }}</div>
<div>{{ number + 1 }}</div>
<div>{{ message.split('').reverse().join('') }}</div>
HTMLCopy
```

#### Directive

HTML 태그의 속성에 `v-` 접두사가 붙은 특별한 속성으로 화면의 DOM 조작을 쉽게할 수 있는 문법들을 제공한다.

```html
<!-- seen의 진위 값에 따라 p 태그가 화면에 표시 또는 미표시 -->
<p v-if="seen">Now you see me</p>
<!-- 화면에 a 태그를 표시하는 시점에 뷰 인스턴스의 url 값을 href에 대입 -->
<a v-bind:href="url"></a>
<!-- 버튼에 클릭 이벤트가 발생했을 때 doSomething이라는 메서드를 실행 -->
<button v-on:click="doSomething"></button>
<!-- 사용자 입력과 Vue의 data를 양방향 바인드 함 -->
<p>{{ message }}</p>
<input v-model= "message" />
```

**v-for**

배열의 데이터를 사용하여 여러 목록을 표시하는 데 사용할 수 있다.

```html
<ol>
    <li v-for="user in users">
    	{{ user.name }}
    </li>
</ol>
```

```js
new Vue({
    el:"#app",
    data(){
        return{
            users:[
                { name : 'james'},
                { name : 'bob'},
                { name : 'kim'},
            ]
        }
    }
})
```

<img src="../../2.Pictures/v-for.jpg">



#### Filters

화면에 표시되는 텍스트의 형식을 편하게 바꿀 수 있도록 고안된 기능이며 `|` 을 이용하여 여러 개의 필터를 적용할 수 있다.

```html
<!-- message 값에 capitalize 필터를 적용하여 첫 글자를 대문자로 변경 -->
{{ message | capitalize }}
HTMLCopy
new Vue({
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
});
```

