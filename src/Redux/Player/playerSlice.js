import { createSlice } from "@reduxjs/toolkit";

//Initialisation des variables
const initialState = {
    currentSongs: [],
    currentAlbum: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
};

//Création du slice pour le player

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        //Tout ce que l'on stock lorsqu'on active une chanson 
        setActiveSong:(state, action) => {
            //Stockage de la chanson en lecture
            state.activeSong = action.payload.songs[action.payload.index]
            //stocker le tableau entier de chanson
            state.currentSongs = action.payload?.data?.songs
            //stockage de l'index
            state.currentIndex = action.payload.index
            //stockage de l'état du player
            state.isActive = true
        },

        //Stockage de l'info de l'album 
        setActiveAlbum: (state, action) => {
            state.currentAlbum = action.payload?.data
        },
        //Pour avancer la liste de lecture
        nextSong: (state, action) => {
            //Permet de récupèrer la chanson dans le tableau à l'index donné
            state.activeSong = state.currentSongs[action.payload];
            //stock le nouvel index
            state.currentIndex = action.payload;
            state.isActive = true;
    },
    //Pour avancer la liste de lecture
    prevSong: (state, action) => {
        //Permet de récupèrer la chanson dans le tableau à l'index donné
        state.activeSong = state.currentSongs[action.payload];
        //stock le nouvel index
        state.currentIndex = action.payload;
        state.isActive = true;
    },
    //gestion du play/pause
    playPause: (state, action) => {
        //Change l'état de isPlaying suivant l'état d'origine


    }

}

})

//Export des reducers
export const { setActiveSong, setActiveAlbum, nextSong, prevSong, playPause } = playerSlice.actions