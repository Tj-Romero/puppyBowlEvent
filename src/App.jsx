// Import the React library, which allows us to define components
import React from "react";
// Import the Players component, which we'll use to show a list of players
import Players from "./features/Players";
import Player from "./features/Player";
// Import Routes
import { Routes, Route } from "react-router-dom";

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <div>
      <div className="App">
        <Routes>
          <Route index element={<Players />} />
          <Route path={"/player/:id"} element={<Player />} />
        </Routes>
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
