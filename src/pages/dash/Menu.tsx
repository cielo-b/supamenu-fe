import React, { useState } from "react";
import Layout from "./Layout";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("Drink");
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [newItemVariant, setNewItemVariant] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      name: newItemName,
      variant: newItemVariant,
      price: newItemPrice,
      image: previewImage,
      category: activeCategory,
    });
    // Reset form
    setNewItemName("");
    setNewItemVariant("");
    setNewItemPrice("");
    setPreviewImage(null);
    setShowAddItemForm(false);
  };

  // Toggle dropdown for a specific item
  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".dropdown-container")) {
      setOpenDropdownId(null);
    }
  };

  // Sample menu data
  const menuItems: any = {
    Drink: [
      {
        id: 1,
        name: "Lalif: Lira Voda, Lemayasa, Gage, Cura",
        variant: "Tom Yummy - 12.5",
        price: "Frw 5,000",
      },
    ],
    Sideboard: [
      {
        id: 2,
        name: "On, Genoën, Oma, Cucuribor",
        variant: "Singapore Sing - 12.5",
        price: "Frw 5,000",
      },
      {
        id: 3,
        name: "On, Genoën, Oma, Cucuribor",
        variant: "Singapore Sing - 12.5",
        price: "Frw 5,000",
      },
      {
        id: 4,
        name: "On, Genoën, Oma, Cucuribor",
        variant: "Singapore Sing - 12.5",
        price: "Frw 5,000",
      },
      {
        id: 5,
        name: "On, Genoën, Oma, Cucuribor",
        variant: "Singapore Sing - 12.5",
        price: "Frw 5,000",
      },
    ],
    Dessert: [],
    Main: [],
  };

  const handleUpdate = (id: number) => {
    console.log("Update item", id);
    setOpenDropdownId(null);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item", id);
    setOpenDropdownId(null);
  };

  return (
    <Layout title="Menu" activeTab="Menu">
      <div className="flex h-full bg-gray-50" onClick={handleClickOutside}>
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Menu Management
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Category Tabs - Responsive design */}
          <div className="mb-4 sm:mb-6">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2 sm:gap-3">
              {["Drink", "Sideboard", "Dessert", "Main"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Menu Items List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden flex-1">
              {menuItems[activeCategory].length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {menuItems[activeCategory].map((item: any) => (
                    <div
                      key={item.id}
                      className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-150 flex items-start relative"
                    >
                      {item.image ? (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-md overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-md bg-gray-200 mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-800 font-medium text-sm sm:text-base truncate">
                          {item.name}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                          <span className="text-xs sm:text-sm text-gray-500 truncate">
                            {item.variant}
                          </span>
                          <span className="font-semibold text-amber-600 text-xs sm:text-sm">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <div className="relative dropdown-container">
                        <button
                          className="ml-2 sm:ml-3 text-gray-400 hover:text-gray-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(item.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>

                        {/* Dropdown menu */}
                        {openDropdownId === item.id && (
                          <div className="absolute right-0 mt-2 w-28 sm:w-32 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                            <div className="py-1">
                              <button
                                className="block w-full text-left px-3 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => handleUpdate(item.id)}
                              >
                                Update
                              </button>
                              <button
                                className="block w-full text-left px-3 py-2 text-xs sm:text-sm text-red-600 hover:bg-gray-100"
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-2 text-sm sm:text-base">No items in this category</p>
                </div>
              )}

              {/* Add Item Button */}
              {!showAddItemForm && (
                <button
                  onClick={() => setShowAddItemForm(true)}
                  className="w-full py-2 sm:py-3 border-t border-gray-100 text-amber-600 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors duration-150 text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add New Item
                </button>
              )}
            </div>

            {/* Add Item Form - Shows on right side on large screens, below on mobile */}
            {showAddItemForm && (
              <div className="lg:max-w-md w-full bg-white rounded-lg shadow-sm overflow-hidden">
                <form
                  onSubmit={handleAddItem}
                  className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50"
                >
                  <h3 className="font-medium text-base sm:text-lg mb-3 sm:mb-4 text-gray-800">
                    Create new menu item
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {/* Image Upload */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Item Image
                      </label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </div>
                        <label className="cursor-pointer">
                          <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-md shadow-sm text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                            Upload
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Item Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Item Name
                      </label>
                      <input
                        type="text"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="w-full px-3 py-1 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs sm:text-sm"
                        placeholder="e.g. Kaffir Lime Vodka"
                        required
                      />
                    </div>

                    {/* Variant */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Variant
                      </label>
                      <input
                        type="text"
                        value={newItemVariant}
                        onChange={(e) => setNewItemVariant(e.target.value)}
                        className="w-full px-3 py-1 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs sm:text-sm"
                        placeholder="e.g. Tom Yummy - 12.5"
                        required
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Price
                      </label>
                      <input
                        type="text"
                        value={newItemPrice}
                        onChange={(e) => setNewItemPrice(e.target.value)}
                        className="w-full px-3 py-1 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs sm:text-sm"
                        placeholder="e.g. Frw 5,000"
                        required
                      />
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddItemForm(false);
                          setPreviewImage(null);
                        }}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-xs sm:text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-xs sm:text-sm"
                      >
                        Save Item
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;