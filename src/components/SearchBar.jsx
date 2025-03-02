import { usePostsContext } from "../context/CreatePostProv";

function SearchBar() {
  const { setSearchQuery, searchQuery } = usePostsContext();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      action=""
      className="relative w-[80%] md:w-[250px] lg:w-[350px] lg:flex"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search post..."
        className="w-full py-2 px-3 pr-8 rounded-full text-sm focus:outline-none focus:ring-1 border border-black focus:ring-black focus:ring-offset-1"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors duration-300 p-1 rounded-full hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
