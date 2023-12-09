import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Upewnij się, że importujesz App.css

function CarForm({ car: initialCar, onCarSubmitted }) {
  const [car, setCar] = useState(
    initialCar || { brand: "", model: "", year: "" }
  );

  useEffect(() => {
    setCar(initialCar || { brand: "", model: "", year: "" });
  }, [initialCar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = car.id ? "put" : "post";
    const url = `http://localhost:5000/cars${car.id ? `/${car.id}` : ""}`;

    axios[method](url, car)
      .then(() => {
        onCarSubmitted();
        setCar({ brand: "", model: "", year: "" });
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="brand">Marka:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={car.brand}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Rok:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={car.year}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button">
          Zapisz samochód
        </button>
      </div>
    </form>
  );
}

export default CarForm;
