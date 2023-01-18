import axios from "axios";
const  baseURL = "https://api-beta.melobit.com/v1/";

const getAxiosBaseURL = axios.create({
    baseURL: baseURL,
});

const getLatestSliders = () => getAxiosBaseURL.get('/song/slider/latest');
const getLatestSong = () => getAxiosBaseURL.get('/song/new/0/6');
const getTopDaySong = () => getAxiosBaseURL.get('/song/top/day/0/7');
const getTopWeekSong = () => getAxiosBaseURL.get('/song/top/week/0/7');
const getTrendingArtist = () => getAxiosBaseURL.get('/artist/trending/0/10');
const getSongDetails = (songId) => getAxiosBaseURL.get(`/song/${songId}`);
const getSearchArtistOrSong = (query) => getAxiosBaseURL.get(`/search/query/${query}/0/20`);

export {
    getLatestSliders,
    getLatestSong,
    getTopDaySong,
    getTopWeekSong,
    getTrendingArtist,
    getSongDetails,
    getSearchArtistOrSong
};
