# Redux

> 리덕스는 리액트 생태계에서 가장 사용률이 높은 상태관리 라이브러리이다. 리덕스를 사용하면 컴포넌트들의 상태 관련 로직들을 다른 파일들로 분리시켜 더욱 효율적으로 관리할 수 있으며 글로벌 상태 관리도 손쉽게 할 수 있다.

## 개념

**Redux와 Context API의 차이**

1. 미들웨어
   - 리덕스에는 미들웨어라는 개념이 존재한다. 리덕스로 상태 관리를 할 때에는 우리가 `useReducer`를 사용해볼때 접했던 개념인 리듀서 함수를 사용한다. 리덕스의 미들웨어를 사용하면 액션 객체가 리듀서에서 처리되기 전에 우리가 원하는 작업들을 수행할 수 있다.
   - ex
     - 특정 조건에 따라 액션이 무시되게 만들 수 있다.
     - 액션을 콘솔에 출력하거나, 서버쪽에 로깅을 할 수 있다.
     - 액션이 디스패치 됐을 때, 이를 수정해서 리듀서에게 전달되도록 할 수 있다.
     - 특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있다.
     - 특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행시킬 수 있다.

2. 유용한 함수와 Hooks
   - Context API와 `useReducer`를 사용할 때에는 이를 편하게 사용하기 위해 커스텀 Hook을 따로 만들어서 사용한다. 리덕스에는 이와 비슷한 작업을 편리하게 해줄 수 있는 여러 기능이 존재한다.
     `connect` 함수를 사용하면 리덕스의 상태 또는 액션 생성 함수를 컴포넌트의 props로 받아올 수 있으며, `useSelector`, `useDispatch`, `useStore`과 같은 Hooks를 사용하면 손쉽게 상태를 조회하거나 액션을 디스패치 할 수 있다.
     이러한 함수들은 내부적으로 최적화가 잘 이루어져있다는 것도 장점이다.

3. 하나의 커다란 상태
   - Context API를 사용해서 글로벌 상태를 관리할 때에는 일반적으로 기능별로 Context를 만들어서 사용하는 것이 일반적이다. 반면 리덕스에서는 모든 글로벌 상태를 하나의 커다란 상태 객체에 넣어서 사용하는 것이 필수이다. 따라서 매번 Context를 새로 만드는 수고로움을 덜 수 있다.

### 리덕스에서 사용되는 키워드

**액션**

- 상태에 어떤 변화가 필요하게 될 땐, 우리는 액션이란 것을 발생시킨다. 액션은 객체형식으로 이루어져있으며 type필드를 필수로 가지고 그 외의 값들은 마음대로 넣어줄 수 있다.

  ```js
  {
    type: "ADD_TODO",
    data: {
      id: 0,
      text: "리덕스 배우기"
    }
  }
  ```

- **액션 생성함수**

  액션 생성함수는 액션을 만드는 함수이다. 단순히 파라미터를 받아와서 액션 객체 형태로 만들어준다.

  ```js
  export function addTodo(data){
    return{
      type: "ADD_TODO",
     	data
    };
  }
  // arrow function
  export const changeInput = text => ({
    type:"CHANGE_INPUT",
    text
  })
  ```

  이러한 액션 생성함수를 만들어서 사용하는 이유는 나중에 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함이다. 그래서 보통 함수 앞에 export 키워드를 붙여 다른 파일에서 불러와서 사용한다.

**리듀서**

- 리듀서는 변화를 일으키는 함수이다. 리듀서는 두가지의 파라미터를 받아온다.

  ```js
  function reducer(state, action){
    // 상태 업데이트 로직
    return 바뀐상태;
  }
  ```

  리듀서는, 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다. 이 리듀서는 `useReducer`를 사용할때 작성하는 리듀서와 똑같은 형태를 가지고 있다.
  `useReducer` 에선 일반적으로 `default:` 부분에 `throw new Error('Unhandled Action')`과 같이 에러를 발생시키도록 처리하는게 일반적인 반면 리덕스의 리듀서에서는 기존 `state`를 그대로 반환하도록 작성해야한다.

  리덕스를 사용 할 때에는 여러개의 리듀서를 만들고 이를 합쳐서 **루트 리듀서 (Root Reducer)**를 만들 수 있다. (루트 리듀서 안의 작은 리듀서들은 서브 리듀서라고 부른다.)

**스토어**

- 리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 된다. 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가 있고, 추가적으로 몇가지 내장 함수들이 있다.

**디스패치**

- 디스패치는 스토어의 내장함수 중 하나이다. 디스패치는 액션을 발생 시키는 것이다. dispatch 라는 함수에는 액션을 파라미터로 전달한다.(dispatch(action))
  그렇게 호출을 하면 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어 준다.

**구독(subscribe)**

- 구독 또한 스토어의 내장함수 중 하나이다. subscribe 함수는, 함수 형태의 값을 파라미터로 받아온다. subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출된다. 
  리액트에서 리덕스를 사용하게 될 때 보통 이 함수를 직접 사용하는 일은 별로 없습니다. 그 대신에 react-redux 라는 라이브러리에서 제공하는 `connect` 함수 또는 `useSelector` Hook  을 사용하여 리덕스 스토어의 상태에 구독한다.

### 리덕스의 3가지 규칙

> 리덕스를 프로젝트에서 사용하게 될 때 알아두고, 꼭 지켜야 할 3가지 규칙

##### 1. 하나의 애플리케이션 안에는 하나의 스토어가 있다.

​	하나의 애플리케이션에선 단 한개의 스토어를 만들어서 사용한다. 여러개의 스토어를 사용하는 것은 가능하지만 권장되지 않는다. 특정 업데이트가 너무 빈번하게 일어나거나, 애플리케이션의 특정 부분을 완전히 분리시키게 될 때 여러개의 스토어를 만들 수도 있다. 하지만 그렇게 하면, 개발 도구를 활용하지 못하게 된다.

##### 2. 상태는 읽기전용이다.

​	리액트에서 state 를 업데이트 해야 할 때, setState를 사용하고, 배열을 업데이트 해야 할 때는 배열 자체에 push를 직접 하지 않고, concat 같은 함수를 사용하여 기존의 배열은 수정하지 않고 새로운 배열을 만들어서 교체하는 방식으로 업데이트를 한다.
리덕스에서도 마찬가지로 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트 해주는 방식으로 해주면, 나중에 개발자 도구를 통해서 뒤로 돌릴 수도 있고 다시 앞으로 돌릴 수도 있다.
*리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경 되는 것을 감지하기 위하여 shallow equallity 검사를 하기 때문이다. 이를 통하여 객체의 변화를 감지 할 때 객체의 깊숙한 안쪽까지 비교를 하는 것이 아니라 겉핥기 식으로 비교를 하여 좋은 성능을 유지할 수 있는 것이다.*

​	

##### 3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 한다.

- 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받는다.
- 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야 한다.

## 사용

redux를 사용하기 위해 설치한다.

```
npm install redux react-redux
```

```
npm install @types/redux @types/react-redux
```

### 리덕스 모듈 만들기

> 리덕스 모듈 : 액션 타입, 액션 생성함수, 리듀서가 모두 들어있는 파일

**modules/counter.js**

```js
/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 */
const initialState = {
  number: 0,
  diff: 1
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
```

**modules/todo.js**

```js
/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = [
  /* 우리는 다음과 같이 구성된 객체를 이 배열 안에 넣을 것입니다.
  {
    id: 1,
    text: '예시',
    done: false
  } 
  */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    default:
      return state;
  }
}
```

#### 루트 리듀서 만들기

리덕스 모듈이 여러개이면 리듀서도 여러개 이다. 한 프로젝트에 여러개의 리듀서가 있을 때는 이를 한 리듀서로 합쳐서 사용한다. 합쳐진 리듀서를 **루트 리듀서라고 부른다**

리듀서를 합칠때는 `redux`에 내장되어있는 `combineReducers` 라는 함수를 사용한다.

**moules/index.js**

```javascript
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
```

이제 리듀서가 합쳐졌다.

이제 루트 리듀서를 이용해 스토어를 만든다.

#### (src/)index.js

```javascript
...

import { createStore } from 'redux';
import rootReducer from './modules';
...
const store = createStore(rootReducer); // 스토어를 만든다.
...
```

이제 각 컴포넌트에서 스토어의 값에 접근할 수 있도록 한다.

```jsx
...
import { Provider } from 'react-redux';
...
  <Provider store={store}>
    <App />
  </Provider>,
...
```

react-redux에서 제공하는 Provider로 App을 감싸주어 모든 컴포넌트에서 접근이 가능하도록 한다.

### Counter만들기

#### 프리젠테이셔널 컴포넌트 만들기

프리젠테이셔널 컴포넌트란, 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트이다.

**components/Counter.js**

```jsx
import React from 'react';
// 단순히 받아온 props를 화면에 보여주는 역할만 한다.
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해준다
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
```

프리젠테이셔널 컴포넌트에선 주로 이렇게 UI를 선언하는 것에 집중하며, 필요한 값들이나 함수는 props로 받아와서 사용하는 형태로 구현한다.

#### 컨테이너 컴포넌트 만들기

컨테이너 컴포넌트란, 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미한다. 그리고, HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와 사용한다.

**containers/CounterContainer.js**

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';
// 스토어에 접근해 모든 상태 및 액션을 디스패치 할 수 있도록 하고 이를 프리젠테이셔널 컴포넌트에 전달한다.
function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
```

useDispatch를 이용하여 스토어의 dispatch 를 사용할 수 있도록 하고
각 모듈에서 만들어 놓은 액션 생성함수를 dispatch를 하여 액션이 리듀서에의해 동작될 수 있도록 한다.

**App.js**

```jsx
function App() {
  return (
    <div>
      <CounterContainer />
    </div>
  );
}
```

### TodoList만들기

#### 프리젠테이셔널 컴포넌트 구현하기

이 파일에 TodoItem, TodoList, Todos 총 3개의 컴포넌트를 만든다. 각각의 컴포넌트로 만드는 이유는 컴포넌트의 리렌더링 성능을 최적화하기 위함이다.

#### components/Todos.js

```jsx
import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아니다.
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}
export default Todos;
```

#### 컨테이너 컴포넌트 만들기

**containers/TodosContainer.js**

```javascript
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없다
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 된다.
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
```

**App.js**

```jsx
...

return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  
  ...
```

