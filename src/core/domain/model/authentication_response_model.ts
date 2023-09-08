export class LoginResponse {
    token: string;
        constructor(token: string ) {
            this.token = token;
        }
    }
    export class SignUpResponse {
        id: string;
        token: string;
            constructor(id: string, token: string) {
                this.id  = id
                this.token = token;
            }
        }
            