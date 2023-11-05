import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const octokit = new Octokit({
  auth: environment.githubToken,
});

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  private repositoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  repositories$: Observable<any[]> = this.repositoriesSubject.asObservable();

  getUser(githubUsername: string) {
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  async getRepos(githubUsername: string) {
    await octokit
      .request(`GET /users/${githubUsername}/repos`, {
        username: githubUsername,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((data) => {
        this.repositoriesSubject.next(data.data);
        console.log(data);
      });
  }
}
