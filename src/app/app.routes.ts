import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { ProjectsComponent } from './features/projects/components/projects/projects.component';
import { NotesComponent } from './features/notes/components/notes/notes.component';
import { ProfileComponent } from './features/profile/components/profile/profile.component';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from './features/employee/components/employee/employee.component'
import { TickethelpComponent } from './features/tickethelp/tickethelp.component';
import { ProfileUserComponent } from './features/profile_user/component/profile-user/profile-user.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    { path: 'dashboard', 
      component: DashbordAdminComponent },
      { path: 'side', 
        component: SidebarComponent },
        { path: 'tasks', component: TasksComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'notes', component: NotesComponent },
        { path: 'profile', component: ProfileComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default route
        {path: 'employee', component:EmployeeComponent},
        {path: 'tickethelp', component:TickethelpComponent},
        {path: 'profile_user', component:ProfileUserComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
})

  export class AppRoutingModule { }
