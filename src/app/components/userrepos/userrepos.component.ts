import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserdataService } from 'src/app/services/user/userdata.service';

@Component({
  selector: 'app-userrepos',
  templateUrl: './userrepos.component.html',
  styleUrls: ['./userrepos.component.scss'],
})
export class UserreposComponent implements OnInit {
  username: string = '';
  userRepos: any = [];
  totalRepos: Number = 0;
  constructor(
    private apiService: ApiService,
    private dataService: UserdataService
  ) {}
  ngOnInit(): void {
    this.dataService.userData$.subscribe((data) => {
      this.username = data.login;
      this.apiService
        .getRepos(this.username)
        .then(() => {})
        .finally(() => {
          this.apiService.repositories$.subscribe((repos) => {
            this.userRepos = repos;
          });
        });
    });
  }
}
