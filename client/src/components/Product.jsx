import { Button } from "@/components/ui/button";
import axios from "axios";
import { HeartIcon, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const product = {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Electronics",
};

export default function Product({ productinfo }) {
  const data = useSelector((state) => state.authSlice.value);
  const handleAddtocard = (id) => {
    if (data) {
      const baseurl = import.meta.env.VITE_BASE_URL;
      axios
        .post(
          `${baseurl}/card/addtocard`,
          {
            productid: id,
            // quantity,
            userid: data.data._id,
          },
          {
            headers: {
              token: data.token,
            },
          }
        )
        .then((res) => {
          toast.success("Product Add to Card");
        })
        .catch((err) => {
          toast.error("Add to Card Failed");
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <Link to={`/singleproduct/${productinfo && productinfo._id}`}>
          <Toaster />
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
      <div
        onClick={() => handleAddtocard(productinfo._id)}
        className="flex gap-3"
      >
        <Button variant="outline" className="cursor-pointer w-[140px] !z-50">
          <PlusIcon className="size-4" /> Add to Card
        </Button>
      </div>
    </div>
  );
}
