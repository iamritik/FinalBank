export class User{
    id:string;
    account:number;
    isfc:number;
    mobile:number;
    pwd:string;

    constructor(username:string,account:number,isfc:number,mobile:number,pwd:string){
        this.id = username;
        this.account = account;
        this.isfc = isfc;
        this.mobile = mobile;
        this.pwd = pwd;
    }

}