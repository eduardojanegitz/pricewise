"use client";

const Searchbar = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-wrap gap-5 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o link do produto"
        className="searchbar-input"
      />
      <button className="searchbar-btn" type="submit">
        Pesquisar
      </button>
    </form>
  );
};

export default Searchbar;
