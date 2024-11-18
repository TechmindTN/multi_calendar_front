import { User } from "../../user/models/user";

interface Employee {
  id: number;
  id_departement:number;
  id_schedule:number;
  id_user:number;
  profile_photo: string;
  first_name: string;
  last_name: string;
  departement: string;
  role: string;
  status: string;
  birthday:string;
city:string;
  adress:string;
  country:string;
  state:string;
  created:string;
  user:User

 
}

export {Employee}