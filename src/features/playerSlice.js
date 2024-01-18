import {createSlice} from "@reduxjs/toolkit";
import {puppyBowlApi} from "../api/puppyBowlApi";

const playerSlice = createSlice({
    name:"player",
    initialState:[],
    extraReducers:(builder)=>{
        builder.addMatcher(puppyBowlApi.endpoints.fetchPlayers.matchFulfilled, (state, {payload})=>{
            console.log(payload.data)
            return payload.data.players

        })
    }
})

export default playerSlice.reducer;