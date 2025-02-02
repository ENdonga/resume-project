import { Component, inject, OnInit } from '@angular/core';
import { Education } from '../../models/resume-model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  education: Education[] = []

  private resumeService = inject(ResumeService)

  ngOnInit(): void {
    this.resumeService.education$().subscribe((data) => {
      this.education = data
    })
  }

}
