import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  constructor(private apiService: ApiService) {}
  username: string = '';
  user = {};

  onSubmit(): void {
    this.apiService.getUser(this.username).subscribe({
      next: (data) => {
        this.user = data;
      },
    });
    console.log(this.user);
  }
  clearSearch(): void {
    this.username = '';
  }
}
