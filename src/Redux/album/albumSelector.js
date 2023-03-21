import { createSelector } from "@reduxjs/toolkit";

//on récupère les données du slice qu'on stock dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;

//on crée le selector
export const selectAlbumsData = createSelector(
    [selectAlbums, selectLoading],
    //on effectue une destructuration d'objet
    (albums, loading) => ({albums, loading})
)