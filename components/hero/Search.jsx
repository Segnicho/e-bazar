import React from "react";
import {BsSearch} from "react-icons/bs"
const Search = () => {
  return (
    <form className="w-full">
      <div className="relative flex rounded md:rounded-lg h-14 shadow-900">
        <input
          id="search"
          type="text"
          autoComplete="off"
          className="item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 focus:ring-0 bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent pl-4 focus:border-r-0 "
          name="search"
          placeholder="Search your products from here"
          value=""
        />
        <button className="flex -ml-2 h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none">
          <BsSearch className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5" />
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
