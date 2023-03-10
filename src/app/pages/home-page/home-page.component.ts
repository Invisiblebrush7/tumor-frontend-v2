import { Component } from '@angular/core';
import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faComputer,
  faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  faGithub: IconDefinition = faGithub;
  faDatabase: IconDefinition = faDatabase;
  faComputer: IconDefinition = faComputer;
  faCloudArrowUp: IconDefinition = faCloudArrowUp;
}
