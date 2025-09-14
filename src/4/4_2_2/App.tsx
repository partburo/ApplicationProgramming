// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

import { useRef } from "react";

export default function Page() {
const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <nav>
        <button onClick={() => inputRef.current?.focus()}>Search</button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
