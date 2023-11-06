import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepoInfoComponent {
  tech: string[] = ['java', 'c++', 'c#'];
  @Input()
  repo: any;
}
