import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { resumeData } from '../data/resume-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private aboutSource = new BehaviorSubject(resumeData.about)
  about$ = this.aboutSource.asObservable()

  constructor() { }

  updateAbout(updatedAbout: any) {
    this.aboutSource.next(updatedAbout)
  }

  getFullName(): string {
    const { salutation, firstname, middlename, lastname } = this.aboutSource.value
    return `${firstname} ${lastname}`.trim()
  }

  getFullAddress(): string {
    const { street, city, state, postalCode } = this.aboutSource.value.address
    const phoneNumber = this.getContactDetails().phone
    return `${street} . ${city} , ${state} . ${postalCode} . ${phoneNumber} .`.trim()
  }

  getContactDetails(): { phone: string, email: string } {
    return {
      phone: this.aboutSource.value.contactNumber,
      email: this.aboutSource.value.email
    }
  }
}
