import { Component } from '@angular/core';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards = resumeData.awards
}
