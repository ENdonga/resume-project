import { Component } from '@angular/core';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent {
  interests = resumeData.interests
}
