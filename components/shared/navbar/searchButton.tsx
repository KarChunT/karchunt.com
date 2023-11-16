import Image from "next/image";

// will use algolia and kbar
const SearchButton = () => {
  return (
    <div>
      <Image
        src="/assets/icons/search.svg"
        width={24}
        height={24}
        alt="Search"
        className="invert-colors hover:cursor-pointer"
      />
    </div>
  );
};

export default SearchButton;
