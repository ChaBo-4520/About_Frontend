# useState

> 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었다. 하지만 이후 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다. 이러한 Hook 중 가장 기본적으로 상태를 관리할 수 있는 useState에 대해 알아보자.

부모로 부터 전달받아 수정할 수 없는 값인 prop과 달리, 컴포넌트에서 동적인 값을 상태(state)라고 부른다. React Hook 중 `useState`를 이용해 state를 관리할 수 있다.

#### Counter.js

```javascript
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

```javascript
const [number, setNumber] = useState(0);
/*
위와 아래는 같은 역할을 한다
배열 비구조화 할당을 통해 간소화
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
*/
```

`useState` 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 이 함수를 호출해주면 배열이 반환되는데, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다.



### 함수형 업데이트

Setter 함수를 사용 할 때, 업데이트 하고 싶은 새로운 값을 파라미터로 넣어준다. 또한, 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.

#### Counter.js

```javascript
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

함수형 업데이트를 할 때는 parameter로 이전값을 받는 함수를 이용하여 업데이트를 구현한다.

*useState로 제어하는 state인 number은 const로 선언되었는데도 불구하고 useState를 통해서 값을 변경할 수 있다. 어떻게 이것이 가능한 것인가? [확인](https://stackoverflow.com/questions/58860021/why-react-hook-usestate-uses-const-and-not-let)*

### 여러개의 input을 통합관리해야할 때

input의 state를 관리하기 위해 onChange와 setstate를 이용해 양방향 바인드를 만들어줘야한다. 여러개의 input이 있는 경우 각각의  onChange와 setstate를 만들어주면 된다. 하지만 이것은 가장 좋은 방법은 아니다. 더 좋은 방법은, 각각의 input에 `name`을 설정하고 이벤트가 발생 했을 때, 이 값을 참조하는 것이다. 그리고, `useState`에서는 객체 형태의 상태를 관리해줘야 한다.

**InputSample.js**

```jsx
....
function InputSample() {
  // 여러개의 input값을 통합하여 관리한다.
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      {/* input 엘리먼트에 name옵션을 주어 name을 키값으로 사용할 수 있다. */}
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```



```js
setInputs({
  ...inputs, // 기존의 input 객체를 복사한 뒤
  [name]: value // name 키를 가진 값을 value 로 설정
});
```

리액트에서 객체 상태를 수정할 때에는 `inputs[name] = value`로 하는 것이 아니라 위와 같이 해야한다. 기존의 객체를 복사한 뒤 값을 변경하여 리턴해주는 것이다.

*이러한 작업을 "불변성을 지킨다"라고 부른다. 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고, 이에 다라 필요한 리렌더링이 진행된다. 만약 `inputs[name] = value`와 같은 방식으로 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않는다.*

**요약 : 리액트에서 객체를 업데이트할 때는 기존 객체를 직접 수정하는 것이아니라, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.**

## referrence

https://react.vlpt.us/basic/07-useState.html