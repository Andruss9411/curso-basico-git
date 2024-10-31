class Usuario{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    toString() {
        return `Emial: ${this,email}, Password: ${this.password}`;
    }
}

export default Usuario;