import { useState, useEffect } from 'react';

export function useCounter(delay: number = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
  return count;
}
// Новая версия
// export function useCounter(delay) {
//     const [count, setCount] = useState(0);
//     useInterval(() => {
//         setCount((c) => c + 1);
//     }, delay);
//     return count;
//   }
