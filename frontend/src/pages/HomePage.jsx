import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);
  return (
    <div>
      <h1 className="text-green-400 text-3xl font-semibold text-center my-8">
        Current Products .
      </h1>

      <div className="container  mx-auto">
        <div className=" grid gap-y-3 grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {products.length == 0 && (
        <div className="flex gap-x-1 justify-center ">
          <h1>no found product? </h1>
          <Link
            to={"/create"}
            className=" underline text-blue-600 hover:text-blue-800"
          >
            create products
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
