# Show

A component that helps you use ternary operators and && operators declaratively.

## Example

```jsx
  <Show when={true}>
    <div>Renders when the condition is true.</div>
  </Show>

   <Show when={false} fallback={<div>Renders when the condition is false.</div>}>
    <div>Renders when the condition is true.</div>
   </Show>

   // Type safety can be guaranteed through type guards
   const testArr: number[] = [1, 2, 3];
   <Show when={testArr}>
    // Since testArr is an array, the item parameter in the children function will be of type number[]
    {(item) => <div>{item}</div>}
  </Show>
```
