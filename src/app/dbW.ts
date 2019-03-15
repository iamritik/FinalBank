export class dbW{
    id:number;
    username:string;
    account:number;
    isfc:number;
    mobile:number;
    pwd:string;

    constructor(id:number,username:string,account:number,isfc:number,mobile:number,pwd:string){
        this.id = id;
        this.username = username;
        this.account = account;
        this.isfc = isfc;
        this.mobile = mobile;
        this.pwd = pwd;
    }
}