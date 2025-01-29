import { Component } from '@angular/core';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = resumeData.skills
}
