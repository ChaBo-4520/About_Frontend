# Basic

#### Vue-router를 이용한 router설정

**vue-router설치**

```
npm i vue-router
```

**App.vue**

```html
<template>
....
	<router-view></router-view>
....
</template>
```

Vue는 SPA이므로 페이지를 이동하는 것이 아니라 하나의 페이지에서 내부 view가 바뀌는 형태이다. 따라서 해당 View가 나올 부분을 정해주는 것이다.

**main.js**

```js
import router from './routes'

new Vue({
...
  router,
...
    
  render: h => h(App),
}).$mount
```

router라는 이름으로 routes폴더를 import한다.

그리고 Vue에 추가시켜준다.

**routes/index.js**

```js
import Vue from 'vue' // ------ 1.
import VueRouter from 'vue-router'// ------ 2.
...
import TestPage1 from '../views/TestPage1.vue'// ------ 3.
...
Vue.use(VueRouter)// ------- 4.

const routes = [// ------- 5.
     {
        path:"/Home",
        component: () => import('../views/HelloWorld.vue') // ------- 6.
    },
    {
        path: "/test",
        name: "test",
        component: TestPage1,
    },
]

const router = new VueRouter({// ------- 7.
    mode : "history",
    base : process.env.BASE_URL,
    routes, 
})

export default router // ------- 8.
```

1. import Vue
2. vue-router를 import
3. 사용할 component를 import
4. VueRouter를 사용하도록 설정(필수)
5. 사용할 routes를 저장할 Array를 선언
   - 지정될 url을 path에 설정하고 해당하는 component를 할당한다.
6. 최상단에 import하지 않고 이와같은 방식으로 import 하여 사용할 수 있다.
7. .
   - history : url에 #을 사용하지 않도록 설정
   - routes를 등록한다.
8. 해당 