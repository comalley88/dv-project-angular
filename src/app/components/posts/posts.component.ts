import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage, Post } from '../../models';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {}

  handleAddPost(data) {
    this.postsService.addPost(data).subscribe((res) => this.posts.push(res));
  }

  ngOnInit() {
    this.postsService.getMessages().subscribe((res) => (this.posts = res));
  }
}
