import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EclypseCartPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      streetAddress: '',
      aptNumber: '',
      state: '',
      zip: ''
    });
  };

  const handleSaveAddress = () => {
    // Handle save address logic
    console.log('Saving address:', formData);
  };

  const handlePlaceOrder = () => {
    // Handle place order logic
    console.log('Placing order...');
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center rounded-lg">
          <div className="w-17 h-17 rounded-lg cursor-pointer flex items-center justify-center mr-4">
            <a onClick={() => navigate('/')} className="text-white font-bold text-xl">
                <img className='' src="/204b51ca3d6365117ecab61115aa49089a454cda (1).jpg" alt="eclypse" />
            </a>
          </div>
        </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Waitlist
              </a>
              <a 
                href="#" 
                className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              >
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Shipping Form */}
          <div>
            {/* Shipping Address Header */}
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h2 className="text-xl font-medium text-gray-900">Shipping Address</h2>
            </div>

            {/* Address Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Radio Button */}
              <div className="flex items-center mb-6">
                <input
                  type="radio"
                  id="new-address"
                  name="address-type"
                  className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  defaultChecked
                />
                <label htmlFor="new-address" className="ml-3 text-gray-900 font-medium">
                  Add New Address
                </label>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                {/* Apt Number, State, Zip */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="aptNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Apt Number
                    </label>
                    <input
                      type="text"
                      id="aptNumber"
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 px-6 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  cancel
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="flex-1 py-3 px-6 bg-black text-white rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            {/* Terms Text */}
            <div className="mb-8">
              <p className="text-sm text-gray-600">
                By placing your order, you agree to our company{' '}
                <a href="#" className="text-gray-900 underline hover:no-underline">
                  Privacy policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-gray-900 underline hover:no-underline">
                  Conditions of use
                </a>
                .
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                  <span className="text-gray-900">7,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping and handling:</span>
                  <span className="text-gray-900">200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Before tax:</span>
                  <span className="text-gray-900">6,599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax Collected:</span>
                  <span className="text-gray-900">1,400</span>
                </div>
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Order Total:</span>
                  <span className="text-2xl font-bold text-gray-900">8,199</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full py-4 bg-black text-white rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EclypseCartPage;