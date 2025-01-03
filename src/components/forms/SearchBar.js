import "./SearchBar.scss";
import IconSearch from "../../assets/img/IconSearch";

function SearchBar() {
  return (
    <form className="search-bar__container">
      <input
        type="text"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />
      <button>
        <IconSearch className="search-bar__search-icon" />
      </button>
    </form>
  );
}
export default SearchBar;
