import SearchIcon from "../icons/SearchIcon";

type PropTypes = {
  placeholder?: string;
  classNames?: string;
};

const SearchBar = ({ placeholder, classNames }: PropTypes) => {
  return (
    <div className="form-control">
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder={placeholder ?? "Search..."}
          className={`pr-2 py-3 rounded-badge pl-12 w-full font-semibold lg:max-w-[400px] focus:outline-none focus:border-accent ${classNames}`}
        />
      </label>
    </div>
  );
};

export default SearchBar;
