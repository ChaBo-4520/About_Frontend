# useRef

> JavaScript에서 특정 DOM을 선택해야 하는 상황에서 `getElementById`, `querySelector`과 같은 DOM Selector 함수를 사용해서 DOM을 선택했다. 
>
> 리액트에서 가끔 DOM 을 직접 선택해야 하는 상황이 발생하면 `ref`라는 것을 사용한다.

### 특정 DOM 선택하기

초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히도록 `useRef`를 사용해 기능을 구현해 보자

**InputSample.js**

```jsx
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
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

`useRef()`를 사용하여 `nameInput`이라는 Ref 객체를 만들고, 접근할 DOM인 input에 ref옵션으로 nameInput을 전달한다. 이제 Ref객체의 current를 통해 우리가 원하는 DOM에 접근할 수 있다. button에서 onClick발생시 onReset를 호출하고, onReset에서 nameInput.current.focus()를 동작시킴으로서 input태그에 포커스를 이동시킬 수 있다.

### 컴포넌트 안의 변수 만들기

`useRef`로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, `useRef`로 관리하고 있는 변수를 설정 후 바로 조회 할 수 있다.

**App.js**

```jsx
.....

function App(){
  ....
  
  const nextId = useRef(4);
  const onCreate = ()=>{
    ...
    nextId.current += 1;
  };
  ...
}
```

`useRef(4)`를 이용해 초기값이 4인 nextId라는 변수를 만들어 주었다. 이제 nextId.current를 이용해 해당 값을 조회하고 수정할 수 있다. 이 값은 변경될 때 리렌더링이 일어나지 않는다.

