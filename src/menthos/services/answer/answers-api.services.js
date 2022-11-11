import http from '../../../core/services/http-common';

export class AnswersApiServices {
    getAll() {
        return http.get('/answers');
    }

    getById(id) {
        return http.get(`/answers/${id}`);
    }

    create(data) {
        return http.post('/answers', data);
    }

    update(id, data) {
        return http.put(`/answers/${id}`, data);
    }

    edit(id, data) {
        return http.patch(`/answers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/answers/${id}`);
    }

    findByTitle(title) {
        return http.get(`/answers?title=${title}`);
    }
    findByQuestionID(questionId){
        return http.get(`/answers?questionId=${questionId}`)
    }



}