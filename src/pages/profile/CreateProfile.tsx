// src/pages/RestaurantProfile/CreateProfile.tsx
import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">SupaMenu</h1>

      <h2 className="text-xl font-bold mb-4">
        1. Create your restaurant profile
      </h2>

      <div className="space-y-6">
        {/* Restaurant Information Card */}
        <div className="p-4 border rounded-lg">
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              1
            </div>
            <div>
              <h3 className="font-bold mb-1">Restaurant Information</h3>
              <p className="text-gray-600 text-sm mb-2">
                Restaurant name, address, Details, owner details
              </p>
              <Link
                to="/restaurant/information"
                className="text-amber-500 hover:underline text-sm"
              >
                Fill information →
              </Link>
            </div>
          </div>
        </div>

        {/* Restaurant Type & Timings Card */}
        <div className="p-4 border rounded-lg">
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              2
            </div>
            <div>
              <h3 className="font-bold mb-1">Restaurant Type & Timings</h3>
              <p className="text-gray-600 text-sm mb-2">
                Establishment & cuisine type, opening hours
              </p>
              <Link
                to="/restaurant/timings"
                className="text-amber-500 hover:underline text-sm"
              >
                Set timings →
              </Link>
            </div>
          </div>
        </div>

        {/* Create Menu Card */}
        <div className="p-4 border rounded-lg">
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              3
            </div>
            <div>
              <h3 className="font-bold mb-1">Create your menu</h3>
              <p className="text-gray-600 text-sm mb-2">
                Menu, restaurant, food images
              </p>
              <Link
                to="/restaurant/menu"
                className="text-amber-500 hover:underline text-sm"
              >
                Create menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
