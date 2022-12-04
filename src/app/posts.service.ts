import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, Post, User } from './models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getMessages(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.apiUrl + '/users');
  }
  getComments(id: number): Observable<Array<IComment>> {
    return this.http.get<Array<IComment>>(
      this.apiUrl + `/posts/${id}/comments`
    );
  }

  constructor(private http: HttpClient) {}
}
