import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

const product = {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing",
};

export default function Product({ productinfo }) {
  return (
    <div className="group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <Link>
          <img
            className="w-[150px] rounded-lg aspect-square"
            src={productinfo ? productinfo.image : product.image}
            alt={productinfo ? productinfo.title : product.name}
          />
        </Link>
      </figure>
      <div className="flex flex-col lg:flex-col sm:justify-between">
        <div>
          <h3 className="text-xs lg:text-sm">
            <Link to={`/singleproduct/${productinfo && productinfo._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productinfo ? productinfo.title.slice(0, 15) : product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <div className="flex gap-5">
          <p className="text-sm font-semibold">
            {productinfo ? productinfo.discountprice : product.discountprice}
          </p>
          <del className="text-sm font-semibold text-gray-500">
            {productinfo ? productinfo.sellingprice : product.sellingprice}
          </del>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="w-[140px]">
          <PlusIcon className="size-4" /> Add to Card
        </Button>
      </div>
    </div>
  );
}
