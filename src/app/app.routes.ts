import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { AwardsComponent } from './components/awards/awards.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'interests', component: InterestsComponent },
    { path: 'awards', component: AwardsComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full'},
];
