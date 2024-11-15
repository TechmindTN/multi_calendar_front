// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../features/employee/models/Employee';
import { Company } from '../features/profile/models/compay';
// import 
@Injectable({ providedIn: 'root' })
export class ProfileSharedDataService {
  private dataSource = new BehaviorSubject<Company>(
    {
        id: 0,
        code:'',
        name: '',
        created:'',
        id_field:0,
        last_updated:'',
        logo:''
    }
  );
  employee$ = this.dataSource.asObservable();

  storeProfile(data: Company){
    this.dataSource.next(data);
  }
  // setData(data: string) {
  //   this.dataSource.next(data);
  // }
}
