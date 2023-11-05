import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { UserdataService } from 'src/app/services/user/userdata.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: any = {};
  constructor(private dataSevice: UserdataService) {}
  faLocation = faLocationDot;
  ngOnInit() {
    this.dataSevice.userData$.subscribe((data) => {
      this.user = data;
      console.log(this.user); // Access and use the data here
    });
  }
}
