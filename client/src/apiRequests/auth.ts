import http from "@/lib/http";
import { LoginBodyType, LoginResType, RegisterBodyType, RegisterResType } from "@/schemaValidations/auth.schema";
import { register } from "module";

const authApiRequest = {
    login: (body: LoginBodyType) => http.post<LoginResType>('auth/login', body),
    register: (body: RegisterBodyType) => http.post<RegisterResType>('auth/register', body),
    auth : (body: {sessionToken : string}) => http.post('api/auth', body , {
        baseUrl : ''
    })
}

export default authApiRequest