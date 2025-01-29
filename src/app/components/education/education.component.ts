import { Component } from '@angular/core';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = resumeData.education
}
