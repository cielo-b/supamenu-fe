import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Utensils, Calendar, CreditCard } from 'lucide-react';
import { ClientData, CreateClientModalProps } from '../interfaces/interfaces';


const CreateClientModal: React.FC<CreateClientModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState<ClientData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    category: 'restaurant',
    representative: '',
    dateOfCreation: '',
    bankAccount: '',
    businessType: 'independent'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-2xl flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">Add New Client</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Client Name */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <User size={16} />
              Client Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Utensils size={16} />
              Business Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="restaurant">Restaurant</option>
              <option value="hotel">Hotel</option>
              <option value="cafe">Cafe</option>
              <option value="bar">Bar</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Representative */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <User size={16} />
              Representative
            </label>
            <input
              type="text"
              name="representative"
              value={formData.representative}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Date of Creation */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calendar size={16} />
              Date of Creation
            </label>
            <input
              type="date"
              name="dateOfCreation"
              value={formData.dateOfCreation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MapPin size={16} />
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Mail size={16} />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone size={16} />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Bank Account */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CreditCard size={16} />
              Bank Account
            </label>
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Create Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClientModal;