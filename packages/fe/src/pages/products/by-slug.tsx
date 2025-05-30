import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trpc } from "@/lib/trpc";
import { useSidebarStore } from "@/store/sidebar";
import { HeartIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

const BySlug = () => {
  const { slug } = useParams();
  const { hide } = useSidebarStore();
  const { data: product, loading } = trpc.product.getBySlug.useQuery(slug);
  const { data: otherProducts, loading: loadingOtherProducts } =
    trpc.product.getAll.useQuery();

  useEffect(() => {
    hide();
  }, [hide]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hover:underline cursor-pointer">
            Customer Electronics
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="hover:underline cursor-pointer">
            Customer Electronics
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="hover:underline cursor-pointer">
            Used Mobile Phones
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {product && !loading && (
        <div className="w-full flex flex-col md:flex-row gap-x-20 gap-y-3">
          <div className="min-w-[1px] flex-1">
            <p className="mt-3 font-bold text-xl">{product.name}</p>
            <p className="mt-2 text-sm text-gray-600">No reviews yet</p>
            <div className="mt-3 bg-gray-200 p-2 underline text-sm cursor-pointer">
              {product.storeName}
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-3 mt-4">
              <div className="flex flex-row md:flex-col gap-y-5 gap-x=3">
                {product.imageUrls.map((url, i) => (
                  <div
                    key={`image-${i}`}
                    className="rounded-lg bg-gray-200 h-15 w-15 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={url}
                      alt="image product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <Carousel>
                <CarouselContent>
                  {product.imageUrls.map((url, i) => (
                    <CarouselItem key={`carousel-${i}`}>
                      <div className="relative rounded-xl overflow-hidden bg-gray-200">
                        <div className="absolute top-3 right-3 bg-white/80 rounded-full flex h-10 w-10 items-center cursor-pointer">
                          <HeartIcon className="h-6 w-6 mx-auto text-gray-500" />
                        </div>
                        <img
                          src={url}
                          alt="image"
                          className="w-full h-[450px] object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
              </Carousel>
            </div>
            <p className="mt-7 font-bold text-xl">
              Other recommendations for your business
            </p>
            {!loadingOtherProducts && otherProducts && (
              <Carousel className="mt-4">
                <CarouselContent>
                  {otherProducts.map((product, i) => (
                    <CarouselItem
                      key={`carousel-other-product-${i}`}
                      className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <Link
                        to={`/products/${product.slug}`}
                        className="flex flex-col"
                      >
                        <div className="relative rounded-xl overflow-hidden bg-gray-200 flex">
                          <img
                            src={product.imageUrls[0]}
                            alt="image"
                            className="w-[186px] h-[186px] object-contain mx-auto"
                          />
                        </div>
                        <p className="mt-3 line-clamp-2">{product.name}</p>
                        <p className="mt-2 font-bold text-xl">
                          US${product.price.toLocaleString()}
                        </p>
                        <p className="mt-1 text-sm">
                          Min. order: {product.minimumOrderQuantity} piece
                          {product.minimumOrderQuantity > 1 ? "s" : ""}
                        </p>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14 -mt-14" />
                <CarouselNext className="mr-14 -mt-14" />
              </Carousel>
            )}
          </div>
          <div className="w-full md:min-w-[450px] md:max-w-[450px] p-4 rounded-lg border bg-white h-[max-content]">
            <p className="text-2xl font-bold">US${product.price}</p>
            <hr className="my-3" />
            <p className="font-semibold text-lg">Shipping</p>
            <p className="mt-3 text-sm">
              Shipping fee and delivery date to be negotiated. Chat with
              supplier now for more details.
            </p>
            <div className="mt-3 flex w-full items-center gap-x-2">
              <Button className="rounded-full w-full flex-1">
                Send Inquiry
              </Button>
              <Button className="rounded-full w-full flex-1 bg-white hover:bg-gray-100 border border-gray-500 text-gray-700">
                Chat Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BySlug;
