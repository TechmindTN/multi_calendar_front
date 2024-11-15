// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { projects } from '../features/projects/models/projects';
// import 
@Injectable({ providedIn: 'root' })
export class projctsSharedDataService {
  private dataSource = new BehaviorSubject<Array<projects>>([
    {
      id: 1,
          logo: '',
          name: 'glovo',
          startingdate: '31', 
          deadline:'',
          duration: '',
          status: '',
        },
  ]);
  projectss$ = this.dataSource.asObservable();

  addProjects(data: projects){
    this.dataSource.next([...this.dataSource.value, data]);
  }
  
}
