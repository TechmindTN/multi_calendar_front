import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileuserService } from '../../services/profileuser.service';
import { ProfileuserSharedDataService } from '../../../../shared/profile_user_shared';


@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent implements OnInit {
  user : any ;
  sidebarOpen = false;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
  }
  activeSection: string = 'info';

  openSection(section: string) {
    this.activeSection = section;
  }
  profileData: any;

  constructor(private profileuserService : ProfileuserService ,private sharedDataService: ProfileuserSharedDataService,) {}

  ngOnInit(): void {
    this.loadLocalProfileData();
  }
  loadLocalProfileData(): void {
    
    this.sharedDataService.employee$.subscribe(data => {
      this.user = data;
      console.log(data)
      // console.log(data); // React to data changes here
    });
  }
  
  loadProfileData(): void {
    this.profileuserService.getProfile().subscribe(
      (data) => {
        
        this.profileData = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }
}
