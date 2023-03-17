import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../constants/apiConstant";

const slice = createSlice({

    // On lui donne un nom
    name: 'albums',
    
    // On initialise les valeurs par défaut 
    initialState: {
        loading: false,
        albums: [],
    },

    //reducer permet de remplir les valeurs des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
        
    }

    //On exporte sous forme de constante les "setter" à l'application

}) 
export const {setLoading, setAlbums} = slice.actions;

//On crée la méthode qui permet de récupérer les infos en BDD
export const fetchAlbums = () => async dispatch => {
    try {
        //On passe setLoading à true pour gerer le chargement des données
        dispatch(setLoading(true));
        // On va chercher les infos en BDD
        const response = await axios.get(`${api}/albums?isActive=true`)

        dispatch(setAlbums(response.data));

        dispatch(setLoading(false));

    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
        
    }

    
    
}

//On exporte le reducer
export default slice.reducer;