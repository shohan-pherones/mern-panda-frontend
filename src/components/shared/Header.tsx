import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header
      id="header"
      className="border-b-2 border-b-orange-500 h-[86px] flex items-center"
    >
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
    </header>
  );
};

export default Header;
