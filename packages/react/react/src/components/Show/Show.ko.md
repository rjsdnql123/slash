# Show

삼항연산자, && 연산자를 선언형으로 사용할 수 있도록 도와주는 컴포넌트입니다

## Example

```jsx
  <Show when={true}>
    <div>조건이 true 일 때 렌더링 됩니다.</div>
  </Show>

   <Show when={false} fallback={<div>조건이 false 일 때 렌더링 됩니다.</div>}>
    <div>조건이 true 일 때 렌더링 됩니다.</div>
   </Show>

   // 타입 가드를 통해 타입을 보장받을 수 있습니다.
   const testArr: number[] = [1, 2, 3];
   <Show when={testArr}>
    // testArr 가 배열이므로 children 함수의 매개변수 item 의 타입은 number[] 입니다.
    {(item) => <div>{item}</div>}
   </Show>
```
