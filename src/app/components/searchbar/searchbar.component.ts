import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserdataService } from 'src/app/services/user/userdata.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  constructor(
    private apiService: ApiService,
    private dataSevice: UserdataService
  ) {}
  username: string = '';
  user: any = {};

  onSubmit(): void {
    this.apiService.getUser(this.username).subscribe({
      next: (data) => {
        this.user = data;
      },
      complete: () => {
        this.dataSevice.setData(this.user);
      },
    });
    this.apiService
      .getRepos(this.username)
      .then(() => {})
      .finally(() => {
        this.apiService.repositories$.subscribe((repos) => {
          this.dataSevice.setUserRepos(repos);
        });
      });
  }
  clearSearch(): void {
    this.username = '';
  }
}
