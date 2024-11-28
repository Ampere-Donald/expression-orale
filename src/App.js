import React from "react";
import "./App.css"; // Fichier CSS global (optionnel)

import ComprehensionOrale from "./components/ComprehensionOrale"; // Importer le composant de la section
import './components/comprehensionOrale.css';


function App() {
  return (
    <div className="App">
      <ComprehensionOrale />
    </div>
  );
}

export default App;
