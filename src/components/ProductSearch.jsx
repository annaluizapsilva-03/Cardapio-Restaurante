export default function ProductSearch({ value, onSearchChange }) {
  return (
    <div className="search-box">
      <label htmlFor="product-search">Pesquisar no cardápio</label>
      <input
        id="product-search"
        type="search"
        placeholder="Ex.: risoto, pudim, suco..."
        value={value}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}