# Slice

리듀서, 액션타입, 액션 생성함수, 초기상태를 하나의 함수로 편하게 선언 할 수 있다.



**예시**

```js
const msgboxSlice = createSlice({
  name: 'msgbox',
  initialState:{
  	open: false,
  	message:'',
	},
	reducers:{
		open(state, action){
  		state.open = true;
		  state.message = action.payload
		},
    close(state){
      state.open = false,
    }
  }
});
```

`createSlice`명령어를 통해서 생성하며 **name, 초기state, reducers**를 설정해 줄 수 있다.
이때 reducers 안에 선언한 리듀서들은 외부에서 `msgboxSlice.actions.open`등 으로 접근할 수 있다. 각 리듀서들은 state, action을 파라미터로 받으며. 외부에서 호출시 전달한 파라미터는 action.payload로 접근할 수 있다.

