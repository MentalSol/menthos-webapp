import http from "../../../core/services/http-common";

export class SubjectsApiServices {
    //GET
    getSubjects() {
        return http.get("/subjects");
    }
    //POST
    createSubjects(data) {
        return http.post("/subjects", data);
    }
    //GET BY ID
    getSubjectById(id) {
        return http.get(`/subjects/${id}`);
    }
    updateSubject(id, data) {
        return http.put(`/subjects/${id}`, data);
    }
}