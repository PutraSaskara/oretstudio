import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M56.276,54.116L41.756,39.596c3.432-3.932,5.52-9.001,5.52-14.52C47.276,6.53,36.746,0,24.276,0S1.276,6.53,1.276,14.076s10.53,14.076,23,14.076c4.585,0,8.829-1.317,12.477-3.595l14.537,14.537c0.39,0.391,1.023,0.391,1.414,0C56.854,55.139,56.854,54.507,56.276,54.116z M5.276,14.076c0-6.906,5.585-12.5,12.5-12.5s12.5,5.594,12.5,12.5s-5.585,12.5-12.5,12.5S5.276,21.982,5.276,14.076z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
