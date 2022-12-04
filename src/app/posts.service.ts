import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, IMessage, Post, User } from './models';

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
  addPost(data: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts/', data);
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
