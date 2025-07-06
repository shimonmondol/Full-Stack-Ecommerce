import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  const allcategories = [
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
    {
      name: "Camera",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/fde516f208fb7bda4578d89abbd53c89.jpg_400x400q75.avif",
    },
  ];
  return (
    <section className="mt-10">
      <div className="container">
        <h2 className="lg:mb-[15px] text-lg lg:text-2xl font-bold text-center">
          All Categories
        </h2>
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10">
          {allcategories.map((item) => (
            <Card className="xl:w-[250px] text-center">
              <CardHeader>
                <img src={item.image} alt="" />
              </CardHeader>
              <CardContent>{item.name}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
