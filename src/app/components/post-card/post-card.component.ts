import { Component, Input, OnInit } from '@angular/core';
import { Post, User } from '../../models';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  showComments: boolean = false;
  @Input() post: Post;
  users: User[] = [];
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    company: {
      name: '',
    },
  };

  findUser(post: Post) {
    this.user = this.users.find((user) => user.id === post.userId);
    return this.user;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getUsers().subscribe((data) => {
      this.users = data;
      this.findUser(this.post);
    });
  }

  onToggleComments() {
    this.showComments = !this.showComments;
  }
  onClickA() {
    console.log('clickedA');
  }
}
