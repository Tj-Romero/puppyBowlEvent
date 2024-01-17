import {useParams} from "react-router-dom";
import {useFetchPlayerQuery} from "../api/puppyBowlApi";

function Player(){
    const params = useParams();
    const {data, isLoading}= useFetchPlayerQuery(params.id);

    console.log(data);

    return(
        <div>
            {isLoading?<h1>Loading...</h1>:<h1>{data.name}</h1>}
        </div>
    )
}

export default Player;