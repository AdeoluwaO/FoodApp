export class User {
id: string;
name: string;
email: string;
password: string;
token: string;
    constructor(id: string, token: string, email: string, password: string, name: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
        this.id  = id
    }
}
