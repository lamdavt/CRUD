export class User {
  
    id?: number;
    username?: string; 
    password?: string; 
    fullname?: string; 
    phone?: string; 
    address?: string; 
    active?: number;

    constructor (id: number,username: string, password: string, fullname: string, phone: string, address: string, active: number ) { 
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.active = active;
    }
}