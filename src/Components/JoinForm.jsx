import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../store/reducers/eventSlice";
import { useNavigate } from "react-router";

function JoinForm({ formData, setFormData, fields }) {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateField = (key, value) => {
    switch (key) {
      case "name":
        return value.trim().length >= 3
          ? ""
          : "Name must be at least 3 characters";
      case "email":
        return /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email address";
      case "contact":
        return /^\d{10}$/.test(value) ? "" : "Contact must be 10 digits";

      default:
        return "";
    }
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    const error = validateField(key, value);
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  // Calculate completed fields including mode and cost
  const completedFields = fields.filter(({ key }) => {
    const value = formData[key] || "";
    const error = validateField(key, value);
    // Check if the field is filled and has no error
    return value.trim() !== "" && !error;
  }).length;

  const progress = Math.floor((completedFields / fields.length) * 100);
  const isFormValid =
    progress === 100 && Object.values(errors).every((err) => !err);

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl">
      <h2 className="text-lg font-semibold">Register Now!!</h2>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-right mt-1 text-gray-500">{progress}%</p>

      <div className="mt-4 flex flex-wrap justify-between gap-4 w-full">
        {fields
          .filter(({ key }) => key !== "dec")
          .map(({ label, key, type, options }) => (
            <div key={key} className="shrink-0 w-full lg:w-[100%] xl:[48%] ">
              <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 bg-gray-50">
                <input
                  type={type}
                  placeholder={label}
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={`outline-none bg-transparent w-full ${
                    key === "imgURL" ? "w-full" : "appearance-none"
                  }`}
                  {...(key === "contact" && { maxLength: 10 })}
                  
                />
                <div
                  className={`ml-2 rounded-full outline-none p-1 px-2 border-2 ${
                    formData[key] && !errors[key]
                      ? "border-green-800 bg-green-300 text-green-800"
                      : errors[key]
                      ? "border-red-800 bg-red-300 text-red-800 px-3"
                      : "border-gray-800 bg-gray-300 text-gray-800"
                  }`}
                >
                  {formData[key] && !errors[key] ? (
                    <i className="ri-check-line"></i>
                  ) : errors[key] ? (
                    "X"
                  ) : (
                    <i className="ri-arrow-right-s-line"></i>
                  )}
                </div>
              </div>
              {/* )} */}
              {errors[key] && (
                <p className="text-red-500 text-xs ml-2">{errors[key]}</p>
              )}
            </div>
          ))}

        {/* Description field last */}
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full mt-6 py-2 rounded-lg font-semibold transition ${
          isFormValid
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
}

export default JoinForm;
