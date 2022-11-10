import http from '../../core/services/http-common';

export class AuthenticationApiService{
    signUpStudent(data){
        return http.post('students',data);
    }
    signUpTeacher(data){
        return http.post('teachers',data);
    }
}