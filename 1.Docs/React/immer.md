# Immer

> 리액트에서 배열이나 객체를 업데이트 해야할 때는 직접 수정 하면 안되고 불변성을 지켜주면서 업데이트를 해주어야 한다. 하지만 데이터가 복잡해질수록 불변성을 지키는 과정이 힘들어진다. 이런 과정을 도와주는 immer이라는 라이브러리를 알아보자.

**설치**

```
npm install immer
```

코드 상단에서 immer를 불러온다. 보통 `produce`라는 이름으로 불러온다.

```js
import produce from "immer"
```

`produce` 함수를 사용 할 때에는 첫번째 파라미터에는 수정하고 싶은 상태, 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다. 두번째 파라미터에 넣는 함수에서는 불변성에 대해서 신경쓰지 않고 그냥 업데이트 해주면 다 알아서 해준다.

**ex1**

```js
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft =>{
  draft.number += 1;
});

console.log(nextState);

// { number : 2, dontChangeMe: 2 }
```

배열이나 객체의 깊은곳에 위치하지 않는 상태의 경우 `immer`를 사용하는 것보다 `concat`과 `filter`를 사용하는 것이 코드가 짧고 간편하다.(예제에서는 무조건 immer를 사용했음)

**ex2**

```ts
 case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
        console.log(draft);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        if (user != undefined) user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
```

### immer과 함수형 업데이트

`produce` 함수에 두개의 파라미터를 넣게 된다면, 첫번째 파라미터에 넣은 상태를 불변성을 유지하면서 새로운 상태를 만들어주지만, 첫번째 파라미터를 생략하고 바로 업데이트 함수를 넣어주면 반환 값은 새로운 상태가 아닌 상태를 업데이트 해주는 함수가 된다.

```js
const todo = {
  text: 'Hello',
  done: false
};

const updater = produce(draft => {
  draft.done = !draft.done;
});

const nextTodo = updater(todo);

console.log(nextTodo);
// { text: 'Hello', done: true }
```

`produce`는 업데이트 함수를 반환하기 때문에 `useState`의 업데이트 함수를 사용할 때 다음과 같이 구현할 수 있다.

```js
const [todo, setTodo] = useState({
  text:'Hello',
  done: false,
});

const onClick = useCallback(()=>{
  setTodo(
  	produce(draft => {
      draft.done = !draft.done;
    })
  );
},[]);
```



*immer는 편리한 라이브러리이지만 성능적으로는 immer를 사용하지 않은 코드가 조금 더 빠르다(큰 차이는 아님). 따라서 데이터의 구조가 복잡해지는 상황을 최대한 방지하여 설계를 하고, 그래도 어쩔 수 없을때는 immer를 사용할것.*