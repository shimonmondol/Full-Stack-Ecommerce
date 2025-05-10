import React from "react";
import Product from "./Product";

const Featherproduct = () => {
  const feathersproductlist = [
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
  ];

  return (
    <section className="mt-10">
      <div className="container">
        <h2 className="mb-[10px] lg:mb-[15px] text-lg lg:text-2xl font-bold text-center">
          Feather Product
        </h2>
        <div className="w-full justify-items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {feathersproductlist.map((item) => (
            <Product />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featherproduct;
