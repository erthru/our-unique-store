import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ChevronDownIcon,
  GemIcon,
  HeartIcon,
  LayoutList,
  LayoutPanelLeftIcon,
  ListFilterIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSidebarStore } from "@/store/sidebar";
import { trpc } from "@/lib/trpc";
import { useEffect } from "react";

const Index = () => {
  const { show } = useSidebarStore();
  const { isLoading, data: products } = trpc.product.getAll.useQuery();

  useEffect(() => {
    show();
  }, [show]);

  return (
    <>
      <div className="w-full flex flex-col gap-y-2 md:flex-row items-center h-[max-content]">
        <p>
          Showing 20,000+ Products from global suppliers for "Used Mobile
          Phones"
        </p>
        <div className="w-full md:w-auto md:ml-auto flex items-center mt-2 md:mt-0">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                <p className="text-nowrap">Sort by relevance</p>
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <RadioGroup defaultValue="relevance">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="flex items-center w-[180px]">
                      <Label htmlFor="relevance">Sort by relevance</Label>
                      <RadioGroupItem
                        value="relevance"
                        id="relevance"
                        className="ml-auto"
                      />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center w-[180px]">
                      <Label htmlFor="salesVolume">Sort by sales volume</Label>
                      <RadioGroupItem
                        value="salesVolume"
                        id="salesVolume"
                        className="ml-auto"
                      />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </RadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <LayoutList className="cursor-pointer h-5 w-5 ml-auto md:ml-3" />
          <LayoutPanelLeftIcon className="cursor-pointer h-5 w-5 ml-2 text-primary" />
          <ListFilterIcon
            className="cursor-pointer h-5 w-5 ml-2 lg:hidden"
            onClick={show}
          />
        </div>
      </div>
      {!isLoading && products?.length > 0 && (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-4 mt-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="rounded-xl p-3 bg-white group"
            >
              <Carousel>
                <CarouselContent>
                  {product.imageUrls.map((url) => (
                    <CarouselItem>
                      <div className="relative rounded-xl overflow-hidden">
                        <div className="absolute top-3 right-3 bg-white/80 rounded-full h-10 w-10 hidden group-hover:flex items-center cursor-pointer">
                          <HeartIcon className="h-6 w-6 mx-auto text-gray-500" />
                        </div>
                        <img
                          src={url}
                          alt="image"
                          className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14 hidden group-hover:flex" />
                <CarouselNext className="mr-14 hidden group-hover:flex" />
              </Carousel>
              <p className="mt-3 line-clamp-2 hover:text-primary">
                {product.name}
              </p>
              <p className="mt-2 font-bold text-xl">
                US${product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm">
                Min. order: {product.minimumOrderQuantity} piece
                {product.minimumOrderQuantity > 1 ? "s" : ""}
              </p>
              <p className="mt-1 text-sm cursor-pointer underline">
                {product.storeName}
              </p>
              <div className="flex items center gap-x-1 mt-2">
                {Array.from({ length: product.storeReputation }).map((_, i) => (
                  <GemIcon
                    key={`gem-${i}`}
                    className="text-orange-500 h-4 w-4"
                  />
                ))}
              </div>
              <Button className="w-3/4 mt-3 bg-white border border-gray-500 rounded-full text-gray-800 hover:text-white hover:border-none">
                Chat Now
              </Button>
            </Link>
          ))}
        </div>
      )}
      <div className="w-full p-3 border bg-white flex mt-4">
        <Pagination className="ml-auto w-[max-content]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="bg-gray-800 text-white"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Index;
