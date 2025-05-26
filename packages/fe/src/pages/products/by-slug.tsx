import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useSidebarStore } from "@/store/sidebar";
import { useEffect } from "react";
import { useParams } from "react-router";

const BySlug = () => {
  const { slug } = useParams();
  const { hide } = useSidebarStore();
  const { data: product, loading } = trpc.product.getBySlug.useQuery(slug);

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
          <div className="w-full flex-1">
            <p className="mt-3 font-bold text-xl">{product.name}</p>
            <p className="mt-2 text-sm text-gray-600">No reviews yet</p>
            <div className="mt-3 bg-gray-200 p-2 underline text-sm cursor-pointer">
              {product.storeName}
            </div>
          </div>
          <div className="w-full md:max-w-[450px] p-4 rounded-lg border bg-white h-[max-content]">
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
