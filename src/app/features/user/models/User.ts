class User {
    id: number;
    id_company: number;
    id_departement:number;
    role_id:number;
    created: string;
    email: string;
    last_login:string;
    last_updated:string;
    phone:number;
    user_name:string;
   
  constructor(id: number,id_company: number,id_departement:number,role_id:number,created:string,email:string,
    last_login:string,last_updated:string,phone:number,user_name:string
  ){
    this.id=id;
    this.id_company=id_company;
    this.id_departement=id_departement;
    this.role_id=role_id;
    this.created=created;
    this.email=email;
    this.last_login=last_login;
    this.last_updated=last_updated;
    this.phone=phone;
    this.user_name=user_name;
  }

  }

  export {User}