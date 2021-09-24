# useEffect 완벽 가이드

## 서문

`useEffect`를 사용하다 보면 뭔가 잘 들어맞지 않는다는 느낌이 든다. 다음과 같은 고민이 된다.

- `useEffect`로 `componentDidMount` 동작을 흉내내려면 어떻게 하지?
- `useEffect` 안에서 데이터 페칭(Data fetching)은 어떻게 해야할까? 두번째 인자로 오는 배열(`[]`은 무엇인가?
- 이펙트를 일으키는 의존성 배열에 함수를 명시해도 되는 걸까?
- 왜 가끔 데이터 페칭이 무한루프에 빠지는 건가?
- 왜 가끔씩 이펙트 안에서 이전 state나 prop 값을 참조하는 건가?

## 요약

#### `useEffect`로 `componentDidMount` 동작을 흉내내려면 어떻게 하지?

- 완전히 같진 않지만 `useEffect(fn, [])`으로 가능하다. `componentDidMount`와 달리 초기 prop과 state를 확인할 수 있다. 

## refference

##### A Complete Guide to useEffect

[원문](https://overreacted.io/a-complete-guide-to-useeffect/)

[번역](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)

