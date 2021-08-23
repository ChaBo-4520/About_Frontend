# Vue vs React

> Frontend 개발자로서 선택하게되는 대표적인 프레임워크 Vue와 라이브러리 React를 비교해본다.

## 공통점

### 컴포넌트 기반 SPA 라이브러리이다.

React와 Vue 둘 다 컴포넌트 단위로 변화사항을 감지하고 렌더링이 필요한 부분만 바꾸어준다. 이는 Virtual DOM을 기반으로 하며, Tree 알고리즘을 통해 변화사항을 찾아낸다.

### props, state, lifecycle

둘 다 컴포넌트 단위로 개발되기 때문에 props, state, lifecycle등 많은 기본적인 구성요소를 동일하게 사용한다.

### 라우터, 전역 상태관리 도구

SPA를 통해 여러 페이지를 보여주기 위한 라우터 역시 React와 Vue 둘 다 존재한다. 차이점은 리액트는 3rd party library에서 지원하고 있고, Vue는 공식 라이브러리로 존재한다는 점이다. 

전역 상태관리도구 역시 비슷하다. React는 제 3자에 의해 Redux가 만들어졌으며, Vue는 시작할 때 부터 Redux와 Redux-saga가 합쳐진 형태의 전역 상태관리 도구인 Vuex를 공식으로 내놨다.

### cli, webpack, ...

둘다 기본 프로젝트 구조를 만들어주는 툴을 cli로 제공하고 있다. webpack 기반으로 번들링 해주는 기능 역시 마찬가지로 존재한다.

### SSR Framework

둘다 서버사이드 렌더링용 웹서버 프레임워크가 있다. webpack 기반 자바스크립트이다보니 둘다 nodeJS 기반이다.
React는 [nextjs](https://nextjs.org/), Vue는 [nuxtjs](https://ko.nuxtjs.org/).

### About 2021

[참고기사](https://ichi.pro/ko/2021-nyeon-react-vs-vue-eotteon-geos-eul-sayonghaeyahabnikka-243684195750587)

