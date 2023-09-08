import { LoginResponse, SignUpResponse } from '../model/authentication_response_model';

export abstract class AuthRepository {
    abstract registerUser(email: string, password: string): Promise<SignUpResponse|  string>;
    abstract loginUser(email: string, password: string): Promise<LoginResponse | string>;
  }