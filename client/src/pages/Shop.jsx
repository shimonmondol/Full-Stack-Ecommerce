import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Filter } from "lucide-react";
import axios from "axios";
import Paginate from "../components/Paginate";

const Shop = () => {
  const [categoryshow, setCategoryshow] = useState(false);
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const allcategories = [
    {
      name: "Camera",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/fde516f208fb7bda4578d89abbd53c89.jpg_400x400q75.avif",
    },
    {
      name: "Laptop",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/8081368be1e60627bfb891af9714b1ff.jpg_400x400q75.avif",
    },
    {
      name: "Smartphone",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/ee6edf35abcfc2a97501a174c60f5bba.png_400x400q75.avif",
    },
    {
      name: "Watch",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a65b2c23ae8deadc8da210d7cf8b1bee.jpg_400x400q75.avif",
    },
  ];

  function getAllproducts() {
    axios
      .get("https://full-stack-ecommerce-server.onrender.com/product/products")
      .then((res) => {
        setAllProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllproducts();
  }, []);

  function SkeletonLoading() {
    return (
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="flex items-center mt-4">
          <svg
            className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <main className="pt-20">
      <div className="container">
        <aside className="grid grid-cols-12 gap-y-2 lg:gap-8">
          <div className="col-span-12 lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Categories</CardTitle>
                  <Filter
                    onClick={() => setCategoryshow(!categoryshow)}
                    className="lg:hidden w-5"
                  />
                </div>
              </CardHeader>
              <CardContent
                className={`${categoryshow ? "block" : "hidden"} lg:block`}
              >
                <ul>
                  {allcategories.map((item, i) => (
                    <li className="mt-3 cursor-pointer">{item.name}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-10">
            {loading && (
              <div className="w-full grid grid-cols-4">
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-3 gap-12">
              {/* {allproducts.map((item, i) => (
                <Product productinfo={item} />
              ))} */}
              <Paginate allproducts={allproducts} itemsPerPage={8} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Shop;
