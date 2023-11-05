import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserdataService } from './services/user/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: any = {};
  constructor(
    private apiService: ApiService,
    private userData: UserdataService
  ) {}

  ngOnInit() {
    this.userData.userData$.subscribe((data) => {
      this.user = data;
    });
  }
}
