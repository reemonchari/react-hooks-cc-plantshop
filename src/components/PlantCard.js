import React, {useState} from "react";

function PlantCard( {plant} ) {
  const [soldOut, setSoldOut] = useState(false);
  const handleToggle = () => setSoldOut(!soldOut);

  return (
    <li className="card" data-testid="plant-item">
      <img src={"http://localhost:6001/plants"} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
