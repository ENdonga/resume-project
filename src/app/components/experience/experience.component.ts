import { Component, OnInit } from '@angular/core';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{
  experiences = resumeData.experience

  ngOnInit(): void {  
  }
}
