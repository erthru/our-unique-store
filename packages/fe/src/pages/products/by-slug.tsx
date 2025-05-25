import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
        <div className="w-full flex flex-col md:flex-row gap-x-4 gap-y-3">
          <div className="w-full flex-1">
            <p className="mt-3 font-bold text-xl">{product.name}</p>
            <p className="mt-2 text-sm text-gray-600">No reviews yet</p>
          </div>
          <div className="w-full md:max-w-[450px] p-3 rounded-lg border bg-white sticky top-0"></div>
        </div>
      )}
    </>
  );
};

export default BySlug;
