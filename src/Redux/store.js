import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from './album/albumSlice';

const store = configureStore({
  reducer: {
    // On déclare ici nos futurs reducers
    albums: albumsReducer,
  },
});




export default store;
