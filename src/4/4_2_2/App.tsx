// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

export default function Page() {
  return (
    <>
      <nav>
        <button>Search</button>
      </nav>
      <input
        placeholder="Looking for something?"
      />
    </>
  );
}
