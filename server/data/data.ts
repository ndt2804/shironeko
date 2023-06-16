import API from '../api/api';
export default {
    getTitles(data: any) {
        return API().data.value.post("/", data);
    },
    getTrendingAnime(data: any) {
        return API().data.value.post("/", data);
    },
    getTrendingManga(data: any) {
        return API().data.value.post("/", data);
    },




};