import axios from "axios";

const apiSerratecMusic = axios.create({
    baseURL: 'https://serratec-music-manager-api.herokuapp.com/api/'
});

export function buscaAlbuns () {
    const url : string = `album`;

    return apiSerratecMusic.get(url);
}

export function buscaDetalhesAlbum (id: number) {
    const url : string = `album/${id}`;

    return apiSerratecMusic.get(url);
}