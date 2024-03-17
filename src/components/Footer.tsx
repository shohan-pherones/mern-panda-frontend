import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-orange-500 py-10 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white gap-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          MernPanda.com
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
