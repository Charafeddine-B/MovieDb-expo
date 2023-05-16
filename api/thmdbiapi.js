import React from "react";
import axios from "axios";

const api='7240feb17f8e707af06df3cc61f1efb0'
const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGE = "https://image.tmdb.org/t/p";
const YOUTUBE = "https://www.youtube.com/watch";

const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE,
    params: {
      api_key: api,
    },
  });

export function getMovies(text, page) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=` +api + `&query=` +text + `&page=` +page;
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
}

 export function getbygenre(genre) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${genre}`)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
}
