import { GlobeIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import NavbarDefaultSearchBox from "./search-box";
import { Button } from "@/components/ui/button";

const NavbarDefault = () => {
  return (
    <nav className="bg-white w-full flex border-b border-gray-300 sticky top-0 z-60">
      <div className="container p-2 md:p-4 flex flex-col lg:flex-row items-center gap-x-10 gap-y-3">
        <div className="flex items-center gap-x-3 md:gap-x-10 w-full">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-8 hidden md:block"
          />
          <img
            src="/images/logo-small.png"
            alt="logo"
            className="h-8 md:hidden"
          />
          <NavbarDefaultSearchBox />
        </div>
        <div className="w-full flex items-center gap-x-5 md:gap-x-10">
          <div className="cursor-pointer">
            <p className="text-sm text-nowrap">Deliver to:</p>
            <div className="flex items-center">
              <img src="/images/id.png" alt="flag" className="w-5 h-4" />
              <p className="font-bold ml-1">ID</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <GlobeIcon className="min-h-6 min-w-6" />
            <p className="ml-2 text-nowrap hidden xl:flex">English-USD</p>
          </div>
          <ShoppingCartIcon className="cursor-pointer min-h-6 min-w-6" />
          <div className="flex items-center cursor-pointer">
            <UserIcon className="min-h-6 min-w-6" />
            <p className="ml-2 text-nowrap hidden xl:flex">Sign in</p>
          </div>
          <Button className="ml-auto rounded-full">Create Account</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDefault;
