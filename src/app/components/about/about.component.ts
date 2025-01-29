import { Component, inject, OnInit } from '@angular/core';
import { resumeData } from '../../data/resume-data';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private userService = inject(UserService)

  aboutData: any;
  fullName: string = ''
  fullAddress: string = ''

  ngOnInit(): void {
    this.userService.about$.subscribe({
      next: (data) => {
        this.aboutData = data
      }
    })
    this.fullName = this.userService.getFullName()
    this.fullAddress = this.userService.getFullAddress()
  }
}
