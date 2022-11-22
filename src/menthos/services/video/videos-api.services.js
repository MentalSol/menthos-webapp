import http from "../../../core/services/http-common";

export class VideosApiServices {
    //GET
    getVideos() {
        return http.get("/videos");
    }
    //POST
    createVideos(data) {
        return http.post("/videos", data);
    }
    //GET BY ID
    getVideoById(id) {
        return http.get(`/videos/${id}`);
    }
    updateVideo(id, data) {
        return http.put(`/videos/${id}`, data);
    }
}