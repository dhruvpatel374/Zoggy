import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const AccountModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <XMarkIcon className="w-8 h-8" />{" "}
        </button>
        <h2 className="text-lg font-semibold mb-4">
          {isLogin ? "Login" : "Create Account"}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="border rounded w-full p-2"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="border rounded w-full p-2"
              required
              placeholder="Password"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                className="border rounded w-full p-2"
                required
                placeholder="Confirm Password"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-orange-400 text-white p-2 rounded-md w-full"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500"
          >
            {isLogin ? "Create one" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountModal;
