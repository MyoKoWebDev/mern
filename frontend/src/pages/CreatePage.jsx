import React, { useState } from "react";
import { useProductStore } from "../store/product";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const handleProductCreate = async () => {
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      return toast.error(message);
    }

    toast.success(message);

    setNewProduct({ name: "", price: "", image: "" });
    navigate("/");
  };
  return (
    <div className="mt-6 hover:scale-105 duration-200 ">
      <div className="flex mx-auto rounded flex-col gap-y-3 bg-slate-600 p-5 max-w-xs ">
        <h1 className="text-center text-2xl font-semibold">Create product</h1>
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          placeholder="Product name"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          placeholder="Product price"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          placeholder="Product image"
          className="input input-bordered w-full max-w-xs"
        />

        <button onClick={handleProductCreate} className="btn w-full max-w-xs">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
