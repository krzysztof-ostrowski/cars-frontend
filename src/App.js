import React, { useState, useEffect } from "react";
import CarList from "./CarList";
import CarForm from "./CarForm";
import axios from "axios";
import "./App.css"; // Upewnij się, że importujesz App.css

function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  const fetchCars = () => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleCarSubmitted = () => {
    fetchCars();
    setEditingCar(null);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/cars/${id}`)
      .then(() => fetchCars())
      .catch((error) => console.log(error));
  };

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Zarządzanie samochodami</h1>
      </div>
      <CarForm car={editingCar} onCarSubmitted={handleCarSubmitted} />
      <CarList cars={cars} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
