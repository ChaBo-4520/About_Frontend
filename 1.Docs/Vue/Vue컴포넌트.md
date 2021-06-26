# Vue Components

> 화면의 영역을 일정한 단위로 쪼개어 재활용 가능한 형태로 관리하는 것이 컴포넌트

<img src="C:\Users\MSI\Desktop\Career\Study\SW_Study\About_Frontend\2.Pictures\components.png">

컴포넌트 등록은 아래와 같은 코드로 생성 가능하다.

```html
<div id="app">
      <my-component></my-component>
</div>

...
 <script>
      var app = new Vue({
        el: "#app",
        ....
        ....
        components: {
          // '컴포넌트 이름' : 컴포넌트 내용
          "my-component": {
            template: "<div>A custom component!</div>",
          },
        },
      });
</script>
```

**Global or Local Component**

아래의 컴포넌트 등록 방식은 전역 컴포넌트 등록 방식이다.

```js
Vue.component('my-component',{
    // 컴포넌트 내용
    template:'',
    ...
})
```

아래의 방식은 지역 컴포넌트 등록 방식이다.

```js
var cmp = {
    
    template:'',
    ...
}
    
new Vue({
    components:{
    'my-cmp': cmp;
	}
})
```

#### 주의할 점

**특정 태그 안에서 컴포넌트 사용**

`<ul>`,`<ol>`,`<table>`과`<select>`와 같은 일부 엘리먼트는 그 안에 어떤 엘리먼트가 나타날 수 있는지에 대한 제한을 가지고 있으며,`<option>`과 같이 특정 다른 엘리먼트 안에만 나타날 수 있다.

이러한 제한이 있는 엘리먼트가 있는 사용자 지정 컴포넌트를 사용하면 다음과 같은 문제가 발생할 수 있다.

```html
<table>
  <my-row>...</my-row>
</table>
<!-- 에러발생 -->
```

사용자 지정 컴포넌트 `<my-row>` 는 잘못 된 컨텐츠가 되어, 결과적으로 렌더링시 에러를 발생시킨다. 해결 방법은 `is` 특수 속성을 사용하는 것이다

```html
<table>
  <tr is="my-row"></tr>
</table>
```

**다음 소스 중 하나에 포함되는 문자열 템플릿을 사용하는 경우에는 이러한 제한 사항이 적용되지않는다.**:

- `<script type="text/x-template">`
- JavaScript 인라인 템플릿 문자열
- `.vue` 컴포넌트

**다음 소스 중 하나에 포함되면 문자열 템플릿을 사용하는 경우에는 이러한 제한 사항이 적용되지 않습니다.**:

- `<script type="text/x-template">`
- JavaScript 인라인 템플릿 문자열
- `.vue` 컴포넌트

**`data`는 반드시 함수여야 한다.**

Vue인스턴스와 다르게 Component의 data는 함수여야 한다.

```js
let count = 0;
Vue.component('my-component',{
    template:'~~~~~~~',
    data(){
        return count
    }
})
```

위와 같이 선언하면 모든 my-component라는 컴포넌트는 동일한 count를 공유한다.

따라서 새로운 객체를 리턴하는 것으로 해결한다.

```js
Vue.component('my-component',{
    template:'~~~',
    data(){
        return{
            count:0,
        }
    }
})
```

### 컴포넌트 간의 통신

Vue에서 부모자식간 통신은 props는 아래로, events는 위로 라고 요약할 수 있다. 즉 부모는 props를 통해 자식에게 데이터를 전달하고 자식은 events를 통해 부모에게 메시지를 보낸다.

















