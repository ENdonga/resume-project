import { Component, inject } from '@angular/core';
import { Award } from '../../models/resume-model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards: Award[] = []

  private resumeService = inject(ResumeService)

  ngOnInit(): void {
    this.resumeService.awards$().subscribe((data) => {
      this.awards = data
    })
  }
}
