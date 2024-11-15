// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../features/employee/models/Employee';
// import 
@Injectable({ providedIn: 'root' })
export class EmployeeSharedDataService {
  private dataSource = new BehaviorSubject<Array<Employee>>([
    // {
    //   id: 1,
    //       // photo: '',
    //       first_name: 'chaima',
    //       departement: 'developement',
    //       role: 'user',
    //       status: 'Active'
    //     },
  ]);
  employees$ = this.dataSource.asObservable();

  addEmployee(data: Employee){
    this.dataSource.next([...this.dataSource.value, data]);
  }
  // setData(data: string) {
  //   this.dataSource.next(data);
  // }
}
