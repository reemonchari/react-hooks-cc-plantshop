import React, {useState} from "react";

function NewPlantForm({plants, setPlants}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
