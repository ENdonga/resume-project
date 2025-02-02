import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { resumeData } from '../data/resume-data';
import { About, Award, Education, Experience, Resume } from '../models/resume-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor() { }

  resume$ = (): Observable<Resume> => {
    return of(resumeData)
  }

  about$ = (): Observable<About> => {
    return of(resumeData.about)
  }

  education$ = (): Observable<Education[]> => {
    return of(resumeData.education)
  }

  experience$ = (): Observable<Experience[]> => {
    return of(resumeData.experience)
  }

  skills$ = (): Observable<string[]> => {
    return of(resumeData.skills)
  }

  intrests$ = (): Observable<string[]> => {
    return of(resumeData.interests)
  }

  awards$ = (): Observable<Award[]> => {
    return of(resumeData.awards)
  }

}
