import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMessage } from '../../models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  @Output() OnAddPost = new EventEmitter();
  userId: string = '';
  body: string = '';
  title: string = '';
  constructor() {}

  onSubmit() {
    const data = {
      userId: this.userId,
      body: this.body,
      title: this.title,
    };

    this.OnAddPost.emit(data);

    (this.userId = ''), (this.title = ''), (this.body = '');
  }
  ngOnInit() {}
}
