import React, { useEffect, useRef, useState } from "react";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../api/category";
import useClickOutside from "../hooks/useClickOutside";

function Categories() {
  const [categories, setcategories] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [activeCategory, setactiveCategory] = useState(null);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => {
    setshowModal(false);
    setshowEditModal(false);
    setshowDeleteModal(false);
  });

  const handleGetCategories = () => {
    getCategories()
      .then((res) => {
        setcategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <div className="bg-white shadow-lg p-5 flex flex-col mt-10 gap-5">
      {showModal && (
        <AddModal
          categories={categories}
          setcategories={setcategories}
          setshowModal={setshowModal}
        />
      )}
      {showEditModal && (
        <EditModal
          category={activeCategory}
          setcategories={setcategories}
          setshowEditModal={setshowEditModal}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          category={activeCategory}
          setcategories={setcategories}
          setshowDeleteModal={setshowDeleteModal}
        />
      )}
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Categories</p>
        <button
          onClick={() => setshowModal(true)}
          className="bg-green text-white px-3 py-2 rounded-md"
        >
          Add Category
        </button>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3" />
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td>{/* category image */}</td>
                <td class="px-6 py-4">{category.name}</td>
                <td class="px-6 py-4 flex items-center gap-5">
                  <button
                    class="ml-3 bg-green text-white py-2 px-12 rounded-lg"
                    onClick={() => {
                      setactiveCategory(category);
                      setshowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    class="ml-3 bg-red text-white py-2 px-10 rounded-lg"
                    onClick={() => {
                      setactiveCategory(category);
                      setshowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                  {/* <button
                    class="text-blue-500"
                    onClick={() => {
                      setactiveCategory(category);
                      setshowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    class="text-red-500"
                    onClick={() => {
                      setactiveCategory(category);
                      setshowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;

const AddModal = ({ categories, setcategories, setshowModal }) => {
  const [apiCalled, setapiCalled] = useState(false);
  const [category, setcategory] = useState("");

  const handleAddCategory = () => {
    setapiCalled(true);

    createCategory({ name: category.toLowerCase() })
      .then((res) => {
        setcategories([...categories, res]);
        setapiCalled(false);
        setshowModal(false);
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white py-6 px-6 w-[450px] rounded-lg flex flex-col gap-5">
        <p className="text-xl font-bold text-center">Add Category</p>
        <div className="flex gap-5 items-stretch">
          <input
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            type="text"
            placeholder="Category Name"
            className="outline-none bg-gray-200 rounded-lg px-3 py-3"
          />
          <button
            className="bg-green text-white px-8 py-1 rounded-md"
            disabled={apiCalled}
            onClick={handleAddCategory}
          >
            {apiCalled ? "Adding..." : "Add Category"}
          </button>
        </div>
      </div>
    </div>
  );
};

const EditModal = ({
  category,
  setcategory,
  setshowEditModal,
  setcategories,
}) => {
  const [categoryName, setcategoryName] = useState("");
  const [apiCalled, setapiCalled] = useState(false);

  const handleEditCategory = () => {
    setapiCalled(true);

    updateCategory(category._id, { name: categoryName.toLowerCase() })
      .then((res) => {
        setcategories((prevCategories) =>
          prevCategories.map((cat) => (cat._id === category._id ? res : cat))
        );
        setapiCalled(false);
        setshowEditModal(false);
      })
      .catch((err) => {
        console.log(err);
        setapiCalled(false);
      });
  };

  useEffect(() => {
    setcategoryName(category.name);
  }, [category]);

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white py-6 px-6 w-[450px] rounded-lg flex flex-col gap-5">
        <p className="text-xl font-bold text-center">Edit Category</p>
        <div className="flex gap-5 items-stretch">
          <input
            value={categoryName}
            onChange={(e) => setcategoryName(e.target.value)}
            type="text"
            placeholder="Category Name"
            className="outline-none bg-gray-200 rounded-lg px-3 py-3"
          />
          <button
            className="bg-green text-white px-8 py-1 rounded-md"
            disabled={apiCalled}
            onClick={handleEditCategory}
          >
            {apiCalled ? "Editing..." : "Edit Category"}
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteModal = ({ category, setcategories, setshowDeleteModal }) => {
  const [apiCalled, setapiCalled] = useState(false);

  const handleDeleteCategory = () => {
    setapiCalled(true);

    deleteCategory(category._id)
      .then((res) => {
        setcategories((prevCategories) =>
          prevCategories.filter((cat) => cat._id !== category._id)
        );
        setapiCalled(false);
        setshowDeleteModal(false);
      })
      .catch((err) => {
        console.log(err);
        setapiCalled(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white py-6 px-6 w-[450px] rounded-lg flex flex-col gap-5">
        <p className="text-xl font-bold text-center">Delete Category</p>
        <p className="text-sm text-gray-500 text-center">
          Are you sure you want to delete this category?
        </p>
        <div className="flex gap-5 items-stretch justify-center">
          <button
            className="bg-red-500 text-white px-8 py-1 rounded-md"
            disabled={apiCalled}
            onClick={handleDeleteCategory}
          >
            {apiCalled ? "Deleting..." : "Delete Category"}
          </button>
        </div>
      </div>
    </div>
  );
};
