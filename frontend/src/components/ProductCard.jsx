import React, { useRef, useState } from "react";
import { useProductStore } from "../store/product";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const btnRef = useRef();
  const [updateProducts, setUpdateProducts] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const deleteProducts = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast.success(message);
    }
  };

  const handleUpdateProduct = async (pid, updateProducts) => {
    const { success, message } = await updateProduct(pid, updateProducts);
    btnRef.current.click();

    if (!success) {
      return toast.error(message);
    }
    toast.success(message);
  };
  return (
    <div className=" card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="gap-x-2 flex">
          <span className="font-bold">MMK</span>
          {product.price}
        </p>
        <div className="card-actions justify-end">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById(product._id).showModal()}
          >
            Edit
          </button>
          <dialog id={product._id} className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  ref={btnRef}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <div className="flex mx-auto  flex-col gap-y-3 max-w-xs">
                <h1 className="text-center text-2xl font-semibold">
                  Edit product
                </h1>
                <input
                  value={updateProducts.name}
                  onChange={(e) =>
                    setUpdateProducts({
                      ...updateProducts,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Product name"
                  className="input input-bordered w-full max-w-xs"
                />

                <input
                  value={updateProducts.price}
                  onChange={(e) =>
                    setUpdateProducts({
                      ...updateProducts,
                      price: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Product price"
                  className="input input-bordered w-full max-w-xs"
                />

                <input
                  value={updateProducts.image}
                  onChange={(e) =>
                    setUpdateProducts({
                      ...updateProducts,
                      image: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Product price"
                  className="input input-bordered w-full max-w-xs"
                />

                <button
                  className="btn w-full max-w-xs"
                  onClick={() =>
                    handleUpdateProduct(product._id, updateProducts)
                  }
                >
                  Update
                </button>
              </div>
            </div>
          </dialog>
          <button
            className="btn btn-secondary"
            onClick={() => deleteProducts(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
