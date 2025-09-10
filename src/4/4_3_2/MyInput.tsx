import { useEffect, useRef } from 'react';

export default function MyInput(
    { 
        shouldFocus, 
        value, 
        onChange 
    }: {
        shouldFocus: boolean,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {
  const ref = useRef<HTMLInputElement>(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}
