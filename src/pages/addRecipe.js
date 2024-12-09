import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisineType: "",
    imageLink: "",
    ingredients: "",
    instructions: "",
  });
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const REACT_BACKEND = "https://mcr-fs-backend.vercel.app"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${REACT_BACKEND}/recipes`, {
        ...formData,
      });
      setMessage("Recipe added successfully!")
      setFormData({ name: "", cuisineType: "", imageLink: "", ingredients: "", instructions: "" });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <>
    <Header />
    <div className="container py-3">
      <h2>Add Recipe</h2>
      <form className="col-md-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cuisine Type:</label>
          <input
            type="text"
            className="form-control"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Link:</label>
          <input
            type="text"
            className="form-control"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients:</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions:</label>
          <textarea
            className="form-control"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {message && 
      <h3>{message}</h3>}
    </div>
    </>
  );
};

export default AddRecipe;
