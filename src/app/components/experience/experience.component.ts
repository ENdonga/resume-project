import { Component, inject, OnInit } from '@angular/core';
import { Experience } from '../../models/resume-model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  private resumeService = inject(ResumeService)

  experiences: Experience[] = []

  ngOnInit(): void {
    this.resumeService.experience$().subscribe(data => {
      this.experiences = data
    })
  }
}
