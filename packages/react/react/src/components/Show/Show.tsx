import React from 'react';

interface ShowProps<T> {
    when: T | undefined | null | false;
    fallback?: JSX.Element;
    children: JSX.Element | ((item: T) => JSX.Element);
  }

 export function Show<T>({ when, fallback = null, children }: ShowProps<T>): React.ReactNode {
    if (!when) { return <>{fallback}</> }

    return <>{typeof children === 'function' ? children(when) : children}</>;
  }
