export default class Customer{
    Fname: string;
    Sname: string;
    age: number;
    email:string;
    birthDate: Date;
    constructor(Fname:string,  Sname: string,email:string,birthDate:Date){
        this.Fname = Fname;
        this.Sname = Sname;
        this.email = email;
        this.birthDate =birthDate;
        this.age = new Date().getUTCFullYear() - birthDate.getFullYear();
    }
    isAdult(){
        return this.age >=18;
    }
     getFistName(){
        return this.Fname.split(" ")[0];
    }
     getSecondName(){
        return this.Sname.split(" ")[0];
    }
}