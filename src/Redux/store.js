import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from './album/albumSlice';
import playerReducer from './player/playerSlice';

const store = configureStore({
  reducer: {
    // On déclare ici nos futurs reducers
    albums: albumsReducer,
    player: playerReducer
  }
})




export default store;
