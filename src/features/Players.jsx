// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../api/puppyBowlApi";

// Import the CSS styles for this component
import "../index.css";

// Import useSelector
import { useSelector } from "react-redux";

// Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';

// Define a new React component
function Players() {
  // Use the generated hook to fetch data from the API
  const players = useSelector((state) => state.player);
  // When the component is first rendered, it will start the API fetch
  const { isLoading } = useFetchPlayersQuery();
  // Use navigate for redirection
  const navigate = useNavigate();

  // Function to handle player card click
  const handlePlayerClick = (playerId) => {
    navigate(`/player/${playerId}`);
  };
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  // Show a loading message while data is being fetched
  // Show an error message if the fetch failed
  // Show the fetched data after it has arrived
  return (
    <>
      <div className="intro">
        <h1>Welcome to PUPPY BOWL 2024 Players Showcase!</h1>
        <h3>Get ready to show your support for our Pawsome Players</h3>
        <p>Explore the profiles of our amazing Puppy players.</p>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        players.map((players) => (
          <div key={players.id} className="players-card" onClick={() => handlePlayerClick(players.id)}>
            <img
              src={players.imageUrl}
              alt={players.name}
              className="players-image"
            />

            <div className="players-details">
              <a href={players.link}>
              <h2> {players.name} </h2>
              <p className="breed">Breed: {players.breed} </p>
              <p className="status">Status: {players.status} </p>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
}

// Export the component so it can be imported and used in other files
export default Players;
