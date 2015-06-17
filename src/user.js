
export class IUserService{
    getUser(){
    }

    update(data){

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
