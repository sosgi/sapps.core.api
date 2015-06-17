
export class IAuthService{
    login(login, password) {
    }

    logout(){
    }
}

export class IAuthListener{
    authEvent(event){
    }
}

export class AuthEvent{
    constructor(type, user){
        this.type = type;
        this.user = user;
    }
}
