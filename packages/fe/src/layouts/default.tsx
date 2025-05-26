import NavbarDefault from "@/components/navbar/default";
import SidebarDefault from "@/components/sidebar/default";
import { useSidebarStore } from "@/store/sidebar";
import { useEffect, useState } from "react";
import { Outlet, useMatches } from "react-router";

const excludeTabFromRoutes = ["/products/:slug"];

type Tab = {
  name: string;
  key: TabKey;
  prependImage?: string;
};

type TabKey =
  | "products"
  | "suppliers"
  | "regionalSupplies"
  | "verifiedManufacturers";

const tabs = [
  {
    name: "Products",
    key: "products",
  },
  {
    name: "Suppliers",
    key: "suppliers",
  },
  {
    name: "Regional Supplies",
    key: "regionalSupplies",
  },
  {
    name: "Verified Manufacturers",
    key: "verifiedManufacturers",
    prependImage: "/svgs/verified-suppliers.svg",
  },
] as Tab[];

const LayoutDefault = () => {
  const [activeTabKey, setActiveTabKey] = useState<TabKey>("products");
  const { isShown } = useSidebarStore();
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const currentPattern = currentMatch.handle;

  return (
    <>
      <NavbarDefault />
      <main className="w-full flex">
        <div className="container p-2 md:p-4">
          {!excludeTabFromRoutes.includes(currentPattern as string) && (
            <div className="flex items-center gap-x-6 mt-1 overflow-x-auto h-[45px] no-scrollbar">
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className={`flex items-center cursor-pointer relative ${
                    activeTabKey !== tab.key
                      ? "hover:scale-110 hover:font-medium transition-all"
                      : ""
                  }`}
                  onClick={() => setActiveTabKey(tab.key)}
                >
                  {tab.prependImage && (
                    <img src={tab.prependImage} className={`h-4 w-4 mr-1`} />
                  )}
                  <p
                    className={
                      activeTabKey === tab.key
                        ? "font-semibold"
                        : "text-gray-600 text-nowrap"
                    }
                  >
                    {tab.name}
                  </p>
                  {activeTabKey === tab.key && (
                    <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] w-6 h-1 rounded-full bg-gray-900"></div>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className={`flex mt-8 ${isShown ? "lg:gap-x-4" : ""}`}>
            <SidebarDefault />
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDefault;
