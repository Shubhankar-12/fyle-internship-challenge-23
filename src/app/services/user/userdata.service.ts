import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();
  private userRepos: any = [];
  setData(data: any) {
    this.userDataSubject.next(data);
  }
  setUserRepos(data: any) {
    this.userRepos = data;
    console.log(this.userRepos);
  }
  getUserRepos() {
    return this.userRepos;
  }
}
