import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent implements OnInit{
  private resumeService = inject(ResumeService)
  interests: string[] = []

  ngOnInit(): void {
    this.resumeService.intrests$().subscribe(data => {
      this.interests = data
    })
  }
}
