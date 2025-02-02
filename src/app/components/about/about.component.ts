import { Component, inject, OnInit } from '@angular/core';
import { About } from '../../models/resume-model';
import { ResumeService } from '../../services/resume.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  about$: Observable<About> | undefined
  private aboutInfo = new BehaviorSubject<About | null>(null)

  private resumeService = inject(ResumeService) 
  
  aboutData!: About;
  fullName: string = ''
  fullAddress: string = ''

  ngOnInit(): void {
    this.about$ = this.resumeService.about$().pipe(
      map((data) => {
        this.aboutInfo.next(data)
        this.aboutData = data
        this.fullName = this.getFullName()
        this.fullAddress = this.getFullAddress()
        return this.aboutData
      })
    )
  }

  getFullName(): string {
    const { salutation, firstname, middlename, lastname } = this.aboutInfo.value || {}
    return `${firstname} ${lastname}`.trim()
  }

  getFullAddress(): string {
    const { street, city, state, postalCode } = this.aboutInfo.value?.address || {}
    const phoneNumber = this.getContactDetails().phone
    return `${street} . ${city} , ${state} . ${postalCode} . ${phoneNumber} .`.trim()
  }

  getContactDetails(): { phone: string, email: string } {
    const contact = this.aboutInfo.value
    if (contact) {
      return {
        phone: contact.contactNumber,
        email: contact.email
      }
    }
    return { phone: '', email: '' }
  }
}
