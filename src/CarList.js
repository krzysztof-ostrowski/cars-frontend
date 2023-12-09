import React from "react";
import "./App.css"; // Upewnij się, że importujesz App.css

function CarList({ cars, onDelete, onEdit }) {
  return (
    <div className="list-group">
      {cars.map((car) => (
        <div className="list-group-item" key={car.id}>
          {car.brand} {car.model} - {car.year}
          <div className="button-group">
            <button className="edit-button" onClick={() => onEdit(car)}>
              Edytuj
            </button>
            <button className="delete-button" onClick={() => onDelete(car.id)}>
              Usuń
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;
