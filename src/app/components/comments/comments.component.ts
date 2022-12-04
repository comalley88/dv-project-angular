import { Component, Input, OnInit } from '@angular/core';
import { IComment, Post } from '../../models';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;
  @Input() showMe: boolean;
  comments: IComment[] = [];
  constructor(private postsService: PostsService) {}
  ToggleMessages() {}
  ngOnInit() {
    this.postsService.getComments(this.post.id).subscribe((data) => {
      this.comments = data;
      console.log(this.comments);
    });
  }
}
