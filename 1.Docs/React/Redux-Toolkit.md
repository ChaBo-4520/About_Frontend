# Redux-Toolkit

> 기존의 단순 Redux만 사용해서 구현한 결과는 너무 복잡하고 중복되는 코드가 많다. 이것을 간단하게 만들고 유용한 기능을 제공하는 redux-toolkit을 알아보자

### 기존 프로젝트에 적용

```
npm install @reduxjs/toolkit
```

### 사용

redux-toolkit을 사용하는 방법, 적용하기 전과 후를 비교해보자

**적용 방법**

```js
// 이전
const store = createStore(rootReducer);
// 이후
export const store = configureStore({
  reducer: rootReducer,
});


// 나중에 나옴.
const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```

적용 전에는 `createStore()`를 호출하고 리듀서 함수를 전달한다. redux-toolkit은 `createStore()` 를 확장한 `configureStore()` 함수를 제공하고 이 함수는 기본적으로 createStore와 동일한 기능을 제공한다. 

그리고 여러 리듀서를 하나로 묶기위해 `combineReducers()` 라는 함수를 사용하며 `key : value` 로 저장한다.

#### **사용**

비교를 위해 기존의 Counter에 적용해 본다.

**기존코드**

```ts
// 액션 type
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

// 액션 생성함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  count:0
}
// 리듀서
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

기존에는 액션 type, 액션 생성함수를 따로 만들었었다.

**createAction 사용 후 **

```ts
export const increase = createAction("counter/INCREASE");
export const decrease = createAction("counter/DECREASE");

// 테스트
console.log(increase.toString());
// "counter/INCREASE"
console.log(increase.type);
// "counter/DECREASE"

function counter(state = initialState, action){
  switch(action.type){
    case: increase.type:
      return { count: state.count + 1 };
    case: decrease.type:
      return { count: state.count - 1 };
    default:
      return state
  }
}
```

createAction을 사용하면 이제 액션 type과 액션 생성함수를 합칠 수 있어 단순해진다. 해당 type은 `.type` 과 `toString()` 으로 사용할 수 있다.

**createReducer 사용 후**

```ts
export const increase = createAction("counter/INCREASE");
export const decrease = createAction("counter/DECREASE");

const counter = createReducer(initialState, {
  [increase.type]: state => state.count + 1,
  [decrease.type]: state => state.count - 1
})
///////////
const store = configureStore({
  reducer: counter
})
```

리듀서 또한 `createReducer` 를 사용함으로서 훨씬 간단하게 만들어 줄 수 있다.

**createSlice 사용 후 **

`createSlice` 를 사용하면 Action과 Reducer를 하나로 묶어줄 수 있다.

```ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers:{
    increase : state => state.count + 1,
    decrease : state => state.count - 1,
  }
})
///
const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```

이제 createSlice 하나만으로 모든 기능을 구현할 수 있다.

이를 컴포넌트에 적용해보자.

**/components/Counter.tsx**

```tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { increaseBy } from "../modules/counter";

function Counter(){
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const {actions, reducer} = counterSlice;
  
  const onIncrease = ()=>{
    dispatch(increase());
  };
  
  const onDecrease = ()=>{
    dispatch(decrease());
  };
  
  
  return(
    <button onClick={onIncrement}>증가</button>{" "}
      <button onClick={onDecrement}>감소</button>
      <hr />
      <div>Clicked: {count} times</div>
  )
  
}
```

조금 더 효율적으로 작성하기 위해 `counterSlice`로 부터 `actions`, `reducer`를 받아온다.  이제 `actions`로부터 각각의 `action`들을.받아와 사용할 수 있다.

**함수 요약**

- `configureStore`: redux에서 제공하던 `createStore`와 같은 store를 생성하지만 인자로 객체를 사용하고 Redux DevTools Extension을 자동으로 설정한다.
- `createAction`: 액션 타입문자열을 받아 이 타입을 사용하는 액션 생성자 함수를 반환합니다.
- `createReducer`: 초기 상태값과 reducer함수에 대한 lookup테이블을 받아 이를 처리하는 reducer를 작성한다.
- `createSlice`: reducer이름과 함수가 포함된 초기 상태와 lookup테이블을 받아 액션 생성자 함수, 액션 유형 문자열 및 리듀서 함수를 자동으로 생성한다.
