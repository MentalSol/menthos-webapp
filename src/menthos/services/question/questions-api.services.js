import http from "../../../core/services/http-common";

export class QuestionsApiServices {
    //GET
    getQuestions() {
        return http.get("/questions");
    }
    //POST
    createQuestions(data) {
        return http.post("/questions", data);
    }
    //GET BY ID
    getQuestionById(id) {
        return http.get(`/questions/${id}`);
    }
    updateQuestion(id, data) {
        return http.put(`/questions/${id}`, data);
    }
    findByStudentId(studentId){
        return http.get(`/questions?studentId=${studentId}`)
    }
}