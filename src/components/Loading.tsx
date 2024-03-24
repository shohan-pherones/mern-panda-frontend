import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="container mx-auto h-[calc(100vh-86px)] flex items-center justify-center gap-2">
      <Loader2 size={18} className="animate-spin" />
      Loading
    </div>
  );
};

export default Loading;
