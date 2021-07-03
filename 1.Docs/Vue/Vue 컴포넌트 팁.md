# Vue 컴포넌트 사용 시 알아두면 좋은 팁

> Vue 컴포넌트 사용 시 알아두면 좋은 팁

#### 컴포넌트에서 Style(css)을 모듈화하여 사용하기

css를 `<style module></style>`처럼 모듈화 하면 동적 형태로도 CSS를 사용할 수 있다. 이렇게 모듈화된 `style`은 `$style`이라는 속성을 통해 사용할 수 있다.

```html
<template>
    <div>
        <button v-on:class="$style.hand"> 버튼 </button>
    </div>
</template>
<style module>
    .hand { cursor: pointer; background-color: #f5f5f5; color: #333333} </style>
```

#### 해당 컴포넌트에만 Style(css)이 적용되게 하기

SPA특성 상 컴포넌트로 페이지를 구성한다고 해도 Style은 공통으로 적용된다. 그래서 컴포넌트가 달라도 Class명이 같으면 동일한 Style의 영향을 받는다.

이때 `scoped`를 사용하면 해당 컴포넌트에만 Style이 반영된다.

```html
<style scoped>
    .hand { color: #333333}
</style>
```



