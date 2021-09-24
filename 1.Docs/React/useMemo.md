# useMemo

> 성능 최적화를 위하여 연산된 값을 재사용하는 useMemo라는 Hook을 알아보자.

**App.js**

```jsx
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  ...
   const count = countActiveUsers(users);
  ...
  return(
  ...
  )
```

위와 같은 상황에서 페이지의 상태가 바뀌어서 리렌더링이 일어날 때마다 countActiveUsers라는 함수가 실행되는 것을 알 수 있다. 실제로 users의 값이 바뀌지 않는데도 동작이 매번일어나는 것은 비효율 적이다. 

이를 useMemo를 사용하여 다음과 같이 만들 수 있다.

```jsx
const count = useMemo(()=>countActiveUsers(users),[users])
```

이제 countActiveUsers는 users의 값이 바뀔 때만 실행이 된다.

*useMemo안에 ()=>countActiveUsers(users) 형태로 넣은 이유는 콜백함수로 countActiveUsers(users)를 전달하면 해당 함수가 전달됨과 동시에 실행도 된다. 이를 막기 위해 Arrow func를 이용하여 전달한다.*

