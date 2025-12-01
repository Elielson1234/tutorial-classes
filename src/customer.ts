export default class Customer{
    name: string;
    age: number;
    email:string;
    birthDate: Date;
    constructor( name:string,email:string,birthDate:Date){
        this.name = name;
        this.email = email;
        this.birthDate =birthDate;
        this.age = new Date().getUTCFullYear() - birthDate.getFullYear();
    }
    isAdult(){
        return this.age >=18;
    }
     getFistName(){
        return this.name.split(" ")[0];
    }
     getLastName(){
        return this.name.split(" ")[1];
    }
}