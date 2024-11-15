import { Component,OnInit  } from '@angular/core';
import {Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { ProfileSharedDataService } from '../../../../shared/profile_shared';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  employee: any;
  company: any;
  sidebarOpen = false; // Initial state of the sidebar

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
  }
  activeSection: string = 'info';

  openSection(section: string) {
    this.activeSection = section;
  }
  profileData: any;

  constructor(private profileService: ProfileService,private sharedDataService: ProfileSharedDataService,) {}

  ngOnInit(): void {
    this.loadLocalProfileData();
  }

  loadLocalProfileData(): void {
    
    this.sharedDataService.employee$.subscribe(data => {
      this.company = data;
      console.log(data)
      // console.log(data); // React to data changes here
    });
  }
  loadProfileData(): void {
    this.profileService.getProfile().subscribe(
      (data) => {
        // console.log('aaaaaaa')
        this.profileData = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }

}
