import React from "react";
import ImageCard from "../ImageCard/page";

const imageCardData = [
  {
    title: "Product 1",
    price: "$29.99",
    colors: "5 colors",
    imageUrl: "https://ik.imagekit.io/m1akscp5q/abybs00378_billabong,l_alt_frt1.jpg.png?updatedAt=1699074802415",
  },
  {
    title: "Product 2",
    price: "$49.99",
    colors: "3 colors",
    imageUrl: "https://ik.imagekit.io/m1akscp5q/abybs00378_billabong,l_alt_frt1.jpg.png?updatedAt=1699074802415",
  },
  {
    title: "Product 3",
    price: "$39.99",
    colors: "7 colors",
    imageUrl: "https://ik.imagekit.io/m1akscp5q/abybs00378_billabong,l_alt_frt1.jpg.png?updatedAt=1699074802415",
  },
  {
    title: "Product 3",
    price: "$39.99",
    colors: "7 colors",
    imageUrl: "https://ik.imagekit.io/m1akscp5q/abybs00378_billabong,l_alt_frt1.jpg.png?updatedAt=1699074802415",
  },
  {
    title: "Product 3",
    price: "$39.99",
    colors: "7 colors",
    imageUrl: "https://ik.imagekit.io/m1akscp5q/abybs00378_billabong,l_alt_frt1.jpg.png?updatedAt=1699074802415",
  },
];

const MenSection = () => {
  return (
    <div>
        <div className="flex items-center justify-center my-6 "> {/* Center the content */}
      <h1 className="font-maven-pro text-center text-[91px] ">MENS TRENDING</h1> {/* Apply font-maven-pro class for the Maven Pro font and text-center class to center the text */}
    </div>
      <div className="flex justify-center space-x-9 mx-10 my-7 ">
        {imageCardData.map((data, index) => (
          <ImageCard
            key={index}
            title={data.title}
            price={data.price}
            colors={data.colors}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MenSection;
