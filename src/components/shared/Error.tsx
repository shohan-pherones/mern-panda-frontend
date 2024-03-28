import Link from "next/link";
import { Button } from "../ui/button";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="container mx-auto h-[calc(100vh-86px)] flex flex-col items-center justify-center gap-5 text-rose-500">
      {message}
      <Link href="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
