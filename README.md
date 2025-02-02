# Resume App
This project integrates a Bootstrap template with Angular components to display a personal resume on the web. It leverages a modular architecture where each section of the resume (About, Experience, Education, Skills, etc.) is rendered through different Angular components. The data is initially stored in an object (`resumeData`), but the project is structured to later fetch data from an API for scalability.

## Features
- Display personal information (name, contact, social links) using Angular components.
- Modular design with Angular services to manage and serve the resume data.
- Bootstrap template integration for a responsive, clean UI.
- Uses RxJS `BehaviorSubject` and `Observable` for managing and fetching data.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **Angular CLI**: Install Angular CLI globally if not installed:

```bash
npm install -g @angular/cli
```
## Installation
Clone the [project](https://github.com/ENdonga/resume-project.git) to your local machine and navigate to the project root and open the it in your favorite IDE.
```bash
cd resume-app
code .
```
## Install dependencies
Install the required dependencies:
```bash
npm install
```
## Run Application
After installing the dependencies, you can start the Angular development server:
```bash
ng serve
```
This will run the app on http://localhost:4200/ by default. Open this URL in your browser to view the resume.

## Project Structure
The project is broken down into multiple Angular components, each corresponding to different sections of the resume:
- AboutComponent: Displays personal information such as name, contact, and social links.
- ExperienceComponent: Displays work experience.
- EducationComponent: Displays educational qualifications.
- SkillsComponent: Displays a list of skills.
- AwardsComponent: Displays awards and certifications.
- Interests: Displays the users interests.

#### Routing

In this project, Angular Routing has been implemented to enable seamless navigation between different sections of the resume. With routing, users can easily navigate between sections such as About, Experience, Education, Skills, and more by simply clicking on the menu item without the need to reload the page.

#### ResumeService

The ResumeService serves the resume data and exposes methods to fetch specific sections. Currently, the data is hardcoded in resumeData, but it can be easily modified to pull data from an API in the future.
```bash
@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private resumeData = resumeData;
  about$(): Observable<About> {
    return of(this.resumeData.about);
  }
  experience$(): Observable<Experience[]> {
    return of(this.resumeData.experience);
  }
  education$(): Observable<Education[]> {
    return of(this.resumeData.education);
  }
  // Additional methods for other sections (skills, awards, etc.)
}
```
#### About Component
The AboutComponent is responsible for displaying the user's personal information, including their name, contact details, summary, and social links. The component uses the ResumeService to fetch the "About" section of the resume data. It leverages Angular's BehaviorSubject and Observable to manage the data reactively, ensuring that when the data is updated, the UI is automatically refreshed. 
- **NOTE**: All other components will work in a very similar manner by fetching data from the ResumeService and displaying it in the relevant components

Key features:
- Fetches the "About" section of the resume data from the ResumeService.
- Stores the data in a BehaviorSubject to facilitate reactive updates.
- Computes the full name and full address for display in the template.

```bash
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about$: Observable<About> | undefined;
  private resumeService = inject(ResumeService);

  ngOnInit(): void {
    this.about$ = this.resumeService.about$();
  }
}
```
#### About Template (with Async Pipe)
The template for the AboutComponent is designed to display the user's personal information in a structured format. It uses Bootstrap classes for styling, ensuring a clean and responsive layout. The data is rendered using Angular’s async pipe, which automatically subscribes to the about$ observable, allowing the template to reactively display the fetched information.

Key features:
- Displays the full name by combining the first and last names.
- Shows the full address and contact details (phone and email).
- Renders the user's professional summary.
- Dynamically renders the user's social links with corresponding icons.

```bash
@if(about$ | async; as about) {
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <h1 class="mb-0">
                {{about.firstname}}
                <span class="text-primary">{{about.lastname}}</span>
            </h1>
            <div class="subheading mb-5">
                {{fullAddress}}
                <a href="mailto:{{about.email}}">{{about.email}}</a>
            </div>
            <p class="lead mb-5">{{about.summary}}</p>
            <div class="social-icons">
                @for (social of about.socialLinks; track $index) {
                    <a class="social-icon" href="{{social.url}}"><i [class]="social.icon"></i></a>
                }
            </div>
        </div>
    </section>
}
```
## Future Enhancements
- **Fetch Data from an API**: Replace the static resumeData object with dynamic API calls to fetch the resume data, enabling real-time updates and scalability.
- **Add Advanced Features**: Implement additional features like contact forms to allow users to get in touch or interactive charts to visually represent skills, experiences, and other data.
- **Admin Module**: Develop an admin module where administrators can update, manage, and dynamically modify the resume data without directly modifying the source code.
- **Portfolio Page**: Add a portfolio section that showcases past projects, code samples, or design work, giving users the ability to present a more comprehensive view of their professional achievements.
