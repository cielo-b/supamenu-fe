// src/pages/RestaurantProfile/Menu.tsx
import { useState } from "react";
import Layout from "./Layout";

const categories = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

export default function MenuCreation() {
  const [selectedCategory, setSelectedCategory] = useState("Drink");
  const [menuItems, setMenuItems] = useState([
    {
      name: "",
      price: "",
      description: "",
      image: null as File | null,
    },
  ]);

  const handleAddMore = () => {
    setMenuItems([
      ...menuItems,
      {
        name: "",
        price: "",
        description: "",
        image: null,
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    field: string,
    value: string | File
  ) => {
    const updatedItems = [...menuItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setMenuItems(updatedItems);
  };

  const handleImageUpload = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      handleInputChange(index, "image", e.target.files[0]);
    }
  };

  return (
    <Layout title="Create your menu" activeTab="menu">
      <div className="space-y-6">
        {/* Category Selection */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 cursor-pointer py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Menu Name"
                value={item.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block font-medium mb-1">Price</label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="0"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                  className="w-24 p-2 border rounded"
                />
                <span className="ml-2">RWF</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Menu description</label>
              <textarea
                placeholder="Ingredients"
                value={item.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                className="w-full p-2 border rounded min-h-[80px]"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-medium mb-1">Image</label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <input
                  type="file"
                  id={`image-upload-${index}`}
                  onChange={(e) => handleImageUpload(index, e)}
                  className="hidden"
                  accept="image/*"
                />
                <label
                  htmlFor={`image-upload-${index}`}
                  className="cursor-pointer block"
                >
                  <p className="text-gray-500">Upload image</p>
                  {item.image && (
                    <p className="text-sm text-gray-600 mt-2">
                      {item.image.name}
                    </p>
                  )}
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* Add More Button */}
        <button
          onClick={handleAddMore}
          className="w-full py-2 cursor-pointer border-2 border-dashed rounded-lg text-gray-500 hover:border-amber-500 hover:text-amber-500"
        >
          Add more
        </button>

        {/* Submit Button */}
        <button className="w-full cursor-pointer bg-amber-500 text-white py-3 rounded font-medium hover:bg-amber-600">
          Save Menu
        </button>
      </div>
    </Layout>
  );
}
