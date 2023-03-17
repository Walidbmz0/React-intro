import { createSelector } from "@reduxjs/toolkit";
//On récupèrre les données du slice qu'on stock dans une constante

const selectAlbums = state => state.albums.albums;

const selectLoading = state => state.albums.loading;

//on crée le selector 
export const selectAlbumsData = createSelector(
    [selectAlbums, selectLoading],
    // On effectue une déstructuration d'objet
    (albums, loading) => ({albums, loading})
)