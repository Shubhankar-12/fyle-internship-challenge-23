import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();
  private userReposSubject = new BehaviorSubject<any[]>([]); // Use BehaviorSubject for userRepos
  userRepos$ = this.userReposSubject.asObservable();
  setData(data: any) {
    this.userDataSubject.next(data);
  }
  setUserRepos(data: any[]) {
    this.userReposSubject.next(data); // Update the BehaviorSubject with new data
  }
  getUserRepos(): Observable<any[]> {
    return this.userReposSubject.asObservable(); // Return an observable for userRepos
  }
}
