import { useState } from "react";
import Layout from "./Layout";

export default function RestaurantInformation() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactNumber: "",
    ownerNumber: "",
    ownerName: "",
    ownerEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout title="Restaurant Information" activeTab="information">
      <div className="space-y-6">
        {/* Restaurant Name */}
        <div>
          <label className="block font-medium mb-2">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Restaurant Complete Name"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block font-medium mb-2">
            Contact number @ Restaurant
          </label>
          <div className="flex items-center">
            <span className="mr-2 bg-gray-100 p-3 rounded-l-lg border">
              +250
            </span>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Mobile number"
              className="flex-1 p-3 border rounded-r-lg"
            />
          </div>
        </div>

        {/* Owner Details */}
        <div className="border-t pt-4">
          <h3 className="font-medium mb-3">Restaurant owner details</h3>

          <div className="flex items-center mb-3">
            <span className="mr-2 bg-gray-100 p-3 rounded-l-lg border">
              +250
            </span>
            <input
              type="tel"
              name="ownerNumber"
              value={formData.ownerNumber}
              onChange={handleChange}
              placeholder="Mobile number"
              className="flex-1 p-3 border rounded-r-lg"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Owner Name"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <input
              type="email"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleChange}
              placeholder="Restaurant Owner Email"
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600 mt-6">
          Save Information
        </button>
      </div>
    </Layout>
  );
}
