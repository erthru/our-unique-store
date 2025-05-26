import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useBreakpoint from "@/hooks/use-breakpoint";
import { useSidebarStore } from "@/store/sidebar";
import { CircleHelpIcon } from "lucide-react";
import { useEffect } from "react";

const SidebarDefault = () => {
  const { isShown, show, hide } = useSidebarStore();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (["xs", "sm", "md"].includes(breakpoint)) {
      hide();
    } else {
      show();
    }
  }, [breakpoint, show, hide]);

  return (
    <>
      {isShown && ["xs", "sm", "md"].includes(breakpoint) && (
        <div
          className="bg-black/70 fixed top-0 left-0 h-full w-full z-50"
          onClick={hide}
        />
      )}
      <aside
        className={`${
          isShown
            ? "min-w-[250px] max-w-[250px] lg:min-w-[200px] lg:max-w-[200px] p-3 fixed top-0 left-0 h-full z-60 md:z-50 lg:relative overflow-y-auto"
            : "min-w-0 max-w-0 p-0 overflow-hidden"
        } bg-white h-[max-content]`}
      >
        <p className="text-lg font-bold">Filters</p>
        <div className="flex items-center mt-3">
          <p className="font-bold">Delivery By</p>
          <CircleHelpIcon className="h-4 w-4 cursor-pointer ml-1" />
        </div>
        <p className="text-xs mt-1 text-gray-600">
          Unit price is subject to expected delivery date
        </p>
        <RadioGroup className="mt-3">
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" className="text-sm font-normal">
              Delivery by Jun 08
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="default2" id="r2" />
            <Label htmlFor="r2" className="text-sm font-normal">
              Delivery by Jun 14
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="default3" id="r3" />
            <Label htmlFor="r3" className="text-sm font-normal">
              Delivery by Jun 20
            </Label>
          </div>
        </RadioGroup>
        <p className="font-bold mt-7">Merge Results</p>
        <div className="flex w-full gap-x-2 mt-3">
          <Checkbox id="mergeBySupplier" />
          <div>
            <Label htmlFor="mergeBySupplier" className="text-sm font-normal">
              Merge by supplier
            </Label>
            <p className="text-xs text-gray-500 mt-1">
              Only the most relevant item from each supplier will be shown
            </p>
          </div>
        </div>
        <p className="font-bold mt-7">Store Reviews</p>
        <p className="text-xs mt-1 text-gray-600">
          Based on 5-star rating system
        </p>
        <RadioGroup className="mt-3">
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="4" id="4" />
            <Label htmlFor="4" className="text-sm font-normal">
              4.0 & up
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="4.5" id="4.5" />
            <Label htmlFor="4.5" className="text-sm font-normal">
              4.5 & up
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="5" id="5" />
            <Label htmlFor="5" className="text-sm font-normal">
              5.0
            </Label>
          </div>
        </RadioGroup>
        <p className="font-bold mt-7">Product Features</p>
        <div className="flex w-full gap-x-2 mt-3">
          <Checkbox id="paidSamples" />
          <Label htmlFor="paidSamples" className="text-sm font-normal">
            Paid samples
          </Label>
        </div>
        <p className="font-bold mt-7">Price</p>
        <div className="flex items-center gap-x-1 mt-3">
          <Input placeholder="Min." />
          <p>-</p>
          <Input placeholder="Max." />
          <Button className="text-gray-800 bg-white border border-gray-800 hover:bg-gray-100">
            OK
          </Button>
        </div>
        <p className="font-bold mt-7">Min. order</p>
        <div className="flex items-center gap-x-1 mt-3">
          <Input />
          <Button className="text-gray-800 bg-white border border-gray-800 hover:bg-gray-100">
            OK
          </Button>
        </div>
        <p className="font-bold mt-7">Condition</p>
        <div className="flex w-full gap-x-2 mt-3">
          <Checkbox id="originalUsed" />
          <Label htmlFor="originalUsed" className="text-sm font-normal">
            Original Used
          </Label>
        </div>
        <div className="flex w-full gap-x-2 mt-2">
          <Checkbox id="officialRefurbished" />
          <Label htmlFor="officialRefurbished" className="text-sm font-normal">
            Official Refurbished
          </Label>
        </div>
        <p className="mt-7 cursor-pointer underline hover:text-primary font-bold">
          View All Filters
        </p>
      </aside>
    </>
  );
};

export default SidebarDefault;
