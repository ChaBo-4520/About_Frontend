# Vue Components

> 화면의 영역을 일정한 단위로 쪼개어 재활용 가능한 형태로 관리하는 것이 컴포넌트
>

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