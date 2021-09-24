# custom Hook

> 컴포넌트를 만들다보면, 반복되는 로직이 자주 발생한다. 예를 들어 input 을 관리하는 코드는 관리 할 때마다 비슷한 코드가 반복된다.
> 이런 상황에서 반복되는 로직을 쉽게 재사용할 수 있는 커스텀 Hooks를 알아보자.

**useInputs.ts**

```js
...

interface FormPropsType<T> {
  username: T;
  email: T;
}
interface HookReturnType<T> {
  form: FormPropsType<T>;
  onChange: (e: any) => void;
  reset: () => void;
}

function useInputs<T>(initialForm: FormPropsType<T>): HookReturnType<T> {
  const [form, setForm] = useState<typeof initialForm>(initialForm);
  // Change

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form: any) => ({
      ...form,
      [name]: value,
    }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return { form, onChange, reset };
}

export default useInputs;

```

useInputs는 제네릭 타입을 사용하여 작성했다. 

inputform에 대해서 반복되는 로직을 재사용할 수 있도록 커스텀 Hook을 만들었다. 해당 Hook은 form(입력값), onChange(바인딩 해주는 함수), reset(입력 칸을 비워주는 함수)를 리턴해주기 때문에 해당 커스텀 Hook의 리턴값을 구조분해 할당을 통해 받아 사용할 수 있다.

**App.js**

```tsx
...
function App(){
  ...
  
  const { form, onChange, reset } = useInputs<string>({
    username: "",
    email: "",
  });
  const { username, email } = form;
  
  ...
  
  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email]);
}
```

작성한 커스텀 Hook `useInputs`를 불러오고 타입을 string으로 지정했다. `useInputs`의 리턴값들을 구조분해 할당으로 할당하고, 이를 컴포넌트안에서 사용할 수 있게 된다.

