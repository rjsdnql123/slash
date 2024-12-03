import { render, screen } from '@testing-library/react';
import { Show } from '.';

describe('Show Component', () => {
  it('renders children when condition is truthy', () => {
    render(
      <Show when={true}>
        <div>Visible Content</div>
      </Show>
    );

    expect(screen.getByText('Visible Content')).toBeInTheDocument();
  });

  it('renders nothing when condition is falsy', () => {
    render(
      <Show when={false}>
        <div>Hidden Content</div>
      </Show>
    );

    expect(screen.queryByText('Hidden Content')).toBeNull();
  });

  it('renders fallback when condition is falsy', () => {
    render(
      <Show when={false} fallback={<div>Fallback Content</div>}>
        <div>Original Content</div>
      </Show>
    );

    expect(screen.getByText('Fallback Content')).toBeInTheDocument();
    expect(screen.queryByText('Original Content')).toBeNull();
  });

  it('renders children as function with correct parameter', () => {
    const items = [1, 2, 3];
    render(
      <Show when={items}>
        {(items) => <div>{items.join(',')}</div>}
      </Show>
    );

    expect(screen.getByText('1,2,3')).toBeInTheDocument();
  });

  test.each([
    [null, 'Null Case'],
    [undefined, 'Undefined Case'],
    [false, 'False Case']
  ])('renders fallback when condition is %p', (condition, testName) => {
    render(
      <Show when={condition} fallback={<div>{testName}</div>}>
        <div>Original Content</div>
      </Show>
    );

    expect(screen.getByText(testName)).toBeInTheDocument();
    expect(screen.queryByText('Original Content')).toBeNull();
  });
});
