import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashbordAdminComponent } from '../dashbord-admin/dashbord-admin.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MatSidenavModule,DashbordAdminComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  
})
/*@NgModule({
  declarations: [
   
    SidebarComponent
  ],

providers: [],
bootstrap: [SidebarComponent]
})*/
export class SidebarComponent {

}
