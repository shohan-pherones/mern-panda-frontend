import Link from "next/link";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div id="header" className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-orange-500"
        >
          MernPanda.com
        </Link>
        <div className="hidden md:block">
          <MainNav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
