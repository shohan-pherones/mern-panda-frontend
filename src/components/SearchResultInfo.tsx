import Link from "next/link";

interface Props {
  total: number;
  city: string;
}

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurant{total > 1 ? "s" : null} found in {city}
        <Link
          href="/"
          className="ml-2 text-sm font-semibold underline cursor-pointer text-sky-500 whitespace-nowrap"
        >
          Change Location
        </Link>
      </span>
      {/* INSERT SORT DROPDOWN HERE */}
    </div>
  );
};

export default SearchResultInfo;
