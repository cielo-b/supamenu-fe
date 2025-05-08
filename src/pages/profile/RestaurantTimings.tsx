import { useState } from "react";
import Layout from "./Layout";
import ImageUpload from "../../components/ImageUpload";
import TimePicker from "../../components/TimePicker";


const restaurantTypes = ["Restaurant", "Pub", "Hotel", "Coffee shop", "Other"];
const cuisineTypes = ["African", "European", "Asian", "American", "Other"];

export default function RestaurantTimings() {
  const [selectedRestaurantType, setSelectedRestaurantType] = useState("Restaurant");
  const [selectedCuisineType, setSelectedCuisineType] = useState("African");
  const [openingTime, setOpeningTime] = useState("14:00");
  const [closingTime, setClosingTime] = useState("02:00");
  const [images, setImages] = useState<File[]>([]);

  return (
    <Layout title="Restaurant Type & Timings" activeTab="timings">
      <div className="space-y-6">
        {/* Restaurant Type Section */}
        <div>
          <h3 className="font-medium mb-2">Restaurant Type (restaurant, pub, hotel, coffeeshop, other)</h3>
          <div className="grid grid-cols-2 gap-2">
            {restaurantTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedRestaurantType(type)}
                className={`p-3 border rounded text-left ${
                  selectedRestaurantType === type
                    ? "bg-amber-100 border-amber-500"
                    : "hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Cuisine Type Section */}
        <div>
          <h3 className="font-medium mb-2">Cuisine Type</h3>
          <div className="grid grid-cols-2 gap-2">
            {cuisineTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedCuisineType(type)}
                className={`p-3 border rounded text-left ${
                  selectedCuisineType === type
                    ? "bg-amber-100 border-amber-500"
                    : "hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="font-medium mb-2">Opening Hours</h3>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block mb-1">From</label>
              <TimePicker time={openingTime} setTime={setOpeningTime} />
            </div>
            <div className="flex-1">
              <label className="block mb-1">To</label>
              <TimePicker time={closingTime} setTime={setClosingTime} />
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div>
          <h3 className="font-medium mb-2">Upload images (pictures or logo)</h3>
          <ImageUpload images={images} setImages={setImages} />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-amber-500 text-white py-3 rounded font-medium hover:bg-amber-600 transition-colors">
          Save Restaurant Details
        </button>
      </div>
    </Layout>
  );
}