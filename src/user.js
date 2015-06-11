
export class IUserManager{
    getUser(){
    }
    login(login, password) {
    }
    logout(){
    }
}

export class IUserListener{
    userEvent(event){
    }
}

export class UserEvent{
    constructor(type, user){
        this.type = type;
        this.user = user;
    }
}

export const LOGIN = 'login';
export const LOGOUT = 'logout';
