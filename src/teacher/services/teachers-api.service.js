import http from '../../core/services/http-common';

export class TeachersApiService {
    getAll() {
        return http.get('/teachers');
    }

    getById(id) {
        return http.get(`/teachers/${id}`);
    }

    create(data) {
        return http.post('/teachers', data);
    }

    update(id, data) {
        return http.put(`/teachers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/teachers/${id}`);
    }

    findByName(name) {
        return http.get(`/teachers?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/teachers?title=${lastName}`);
    }
    findBySupplierID(supplierID){
        return http.get(`/teachers?supplierID=${supplierID}`)
    }
}