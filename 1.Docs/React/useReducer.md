# useReducer

> 이전에 사용한 useState는 상태 업데이트를 컴포넌트 내부에서 수행했었다. 상태를 관리하는 또 다른 방법인 useReducer를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다. (컴포넌트 바깥에 작성, 다른 파일에 작성 후 불러와서 사용 )

## useReducer란

현재 상태와 액션객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

```js
function reducer(state, action){
  // 새로운 상태를 만드는 로직
  // const nextState = ....
  
  return nextState;
}
```

reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.
여기서 `action`은 업데이트를 위한 정보를 가지고 있다. 주로 `type`값을 지닌 객체 형태로 사용하지만, 꼭 따라야 할 규칙은 없다.

**action 예시**

```js
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
```

위와 같이 정해진 규칙이 없다.

#### useReducer의 사용법

```js
const [`state`, `dispatch`] = useReducer(reducer, initialState);
```

여기서 `state`는 앞으로 컴포넌트에서 사용할 수 있는 상태를 가르키게 되고, `dispatch`는 액션을 발생시키는 함수이다. 이 함수는 `dispatch({type:'INCREMENT'})` 와 같이 사용한다.
`useReducer`의 첫번째 파라미터는 reducer함수이고, 두번째 파라미터는 초기 상태이다. 

**사용예시**

```jsx
...

function 리듀서(현재상태, 액션){
  switch(액션.type){
    case "INCREMENT":
      return 현재상태 + 1;
    .....
  }
}

function Counter(){
  
  ...
  
  const [상태이름, 디스패치] = useReducer(리듀서, 0(초기상태));
  
  const onIncrease =()=>{
    // 액션의 예시이다. 꼭 이런식으로 만들 필요없음
    디스패치({type:"INCREMENT"});
  };
  
  ...
  
  return (

    ....
    
    <button onClick={onIncrease}>증가버튼</button>
    
    ...
  
  )
}
```

관리할 상태를 useReducer를 이용하여 리듀서와 함께 생성한다. 리듀서에 액션에 따라 상태를 업데이트 하는 로직을 작성한다. 해당 리듀서를 호출하는 dispatch를 특정 function 에서 사용하고 이를 원하는 곳에서 사용한다.



*상태를 관리함에 있어서 useState를 사용할 때와 useReducer를 사용할 때를 적절히 선택하여 사용하면 된다.*