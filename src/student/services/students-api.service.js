import http from '../../core/services/http-common';

export class StudentsApiService {
    getAll() {
        return http.get('/students');
    }

    getById(id) {
        return http.get(`/students/${id}`);
    }

    create(data) {
        return http.post('/students', data);
    }

    update(id, data) {
        return http.put(`/students/${id}`, data);
    }

    delete(id) {
        return http.delete(`/students/${id}`);
    }

    findByName(name) {
        return http.get(`/students?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/students?title=${lastName}`);
    }
    findBySupplierID(supplierID){
        return http.get(`/students?supplierID=${supplierID}`)
    }
}