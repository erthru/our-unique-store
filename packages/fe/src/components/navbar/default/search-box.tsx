import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CameraIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

const NavbarDefaultSearchBox = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [search, setSearch] = useState("Used Mobile Phones");

  return (
    <div
      className={cn(
        "border border-gray-700 p-1 rounded-full flex items-center w-full",
        className
      )}
    >
      <input
        value={search}
        className="bg-transparent outline-none w-full h-full ml-3"
        placeholder="What are you looking for?"
        onInput={(e) => setSearch(e.currentTarget.value)}
      />
      <CameraIcon className="ml-4 min-h-6 min-w-6 hidden md:flex cursor-pointer" />
      <Button className="ml-4 rounded-full h-8">
        <SearchIcon className="text-white h-5 w-5" />
        <p>Search</p>
      </Button>
    </div>
  );
};

export default NavbarDefaultSearchBox;
