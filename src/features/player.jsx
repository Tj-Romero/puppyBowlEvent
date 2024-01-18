import { useParams } from "react-router-dom";
import { useFetchPlayerQuery } from "../api/puppyBowlApi";

function Player() {
    const params = useParams();
    const { data, isLoading } = useFetchPlayerQuery(params.id);

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={data["data"].player.imageUrl} alt={data["data"].player.name} />
                    <h1>{data["data"].player.name}</h1>
                    <p className="player-id">ID: {data["data"].player.id}</p>
                    <p className="player-breed">Breed: {data["data"].player.breed}</p>
                    <p className="player-status">Status: {data["data"].player.status}</p>
                </div>
            )}
        </div>
    );
}

export default Player;
