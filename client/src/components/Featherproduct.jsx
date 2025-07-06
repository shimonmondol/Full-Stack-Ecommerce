import React from "react";
import Product from "./Product";

const Featherproduct = () => {
  const feathersproductlist = [
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
    // {
    //   name: "Red Hat",
    //   href: "#",
    //   image: "https://bundui-images.netlify.app/products/04.jpeg",
    //   price: "$28",
    //   category: "Clothing",
    // },
  ];

  return (
    <section className="mt-10">
      <div className="container">
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
