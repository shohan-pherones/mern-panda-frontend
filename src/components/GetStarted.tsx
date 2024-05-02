"use client";

import { useRouter } from "next/navigation";
import SearchBar, { SearchForm } from "./shared/SearchBar";

const GetStarted = () => {
  const router = useRouter();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    router.push(`/search/${searchFormValues.searchQuery}`);
  };

  return (
    <section
      id="get_started"
      className="container mx-auto flex flex-col gap-20 mt-20"
    >
      <div className="bg-white rounded-xl shadow-md py-10 flex flex-col gap-5 text-center border md:px-32">
        <h2 className="text-2xl md:text-4xl font-bold text-orange-500">
          Mmmm... search and eat now!
        </h2>
        <span>Food is just a click away!</span>
        <SearchBar
          placeholder="Search by city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>
    </section>
  );
};

export default GetStarted;
