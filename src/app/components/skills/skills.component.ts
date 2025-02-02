import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  private resumeService = inject(ResumeService)

  skills: string[] = []

  ngOnInit(): void {
    this.resumeService.skills$().subscribe({
      next: (data) => {
        this.skills = data
      }
    })
  }
}
