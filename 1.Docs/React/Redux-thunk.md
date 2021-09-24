# Redux-thunk

redux-thunk는 리덕스에서 비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어이다. 이 미들웨어를 사용하면 **액션 객체가 아닌 함수를 디스패치 할 수 있다.** 함수를 디스패치 할 때는, 해당 함수에서 `dispatch` 와 `getState` 를 파라미터로 받아와주어야 한다. 이 함수를 만들어주는 함수를 **thunk** 라고 부른다.

## 사용하기

**설치**

```
npm install --save redux-thunk
```

**index.js**

```jsx
...
import ReduxThunk from 'redux-thunk';
...
	composeWithDevTools(applyMiddleware(ReduxThunk, logger))
```

redux-thunk도 미들웨어이므로 위와 같이 사용한다.

**카운터 딜레이하기**

thunk 함수를 만들고, `setTimeout`를 사용하여 액션이 디스패치되는 것을 1초씩 딜레이시켜보자.

**modules/counter.js**

```js
// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요는 없다.
// export const increaseAsync = () => (dixpatch, getState)
export const increaseAsync = () => dispatch => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없다.)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
```

thunk  함수는 액션 발생 시, 액션이 counter(리듀서)에 도달하기 전에 중간에서 작업을 해준 뒤 리듀서에 액션을 전달한다.

**containers/CounterContainer.js**

```jsx
import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';

function CounterContainer() {
  // store 의 state 에 접근할 수 있도록 하는 hook
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
```

