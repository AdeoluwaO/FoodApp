import axios from "axios";
import { AppCostants } from "../core/utils/app_constants";
import { AuthRepository } from "../core/domain/repositories/auth_repository";
import { LoginResponse, SignUpResponse } from "../core/domain/model/authentication_response_model";
import {storeValue} from '../core/local_storage/storage';


const baseUrl = AppCostants.baseUrl;


export class AuthImpl implements AuthRepository {

    async registerUser(email: string, password: string): Promise<SignUpResponse | string> {
        try {
            const response = await axios.post(`${baseUrl}/register`, {
                email: email,
                password: password
            })
            const value = new SignUpResponse(response.data["id"], response.data["token"]);
            // ? storing user token in device 
            storeValue({key: 'token', value: JSON.stringify(value.token)})
            
            return value;
        } catch (error) {
            console.log(`ERROR ${error}`)
            return `${error}`;
        }
    }

    async loginUser(email: string, password: string): Promise<LoginResponse | string> {
        console.log(`User email ${email} PASSWORD ${password}`);
        try {
            const response = await axios.post(`${baseUrl}/login`,{
                "email": email,
                "password": password
            })
            console.log(`User TOKEN ${response.data}`);
            const resp = new LoginResponse(response.data["token"]);
            // ? storing user token in device 
            storeValue({key: 'token', value: JSON.stringify(resp.token)})
          return resp;
        } catch (error) {
            console.log(`User ERROR IS  ${error}`);
            return `${error}`;
        }
    }
}