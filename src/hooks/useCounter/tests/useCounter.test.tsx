import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  test('should render initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, { initialProps: 100 });
    expect(result.current.count).toBe(100);
  });

  test('should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter, { initialProps: 20 });
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(19);
  });
});
