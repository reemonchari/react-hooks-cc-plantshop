import React, { useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [plants, setPlants] = useState([]);

  return (
    <div className="app">
      <Header />
      <PlantPage searchTerm={searchTerm} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
