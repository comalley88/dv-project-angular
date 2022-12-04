import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMessage } from '../../models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  @Output() OnAddPost: EventEmitter<IMessage> = new EventEmitter();
  message: string = '';
  name: string = '';
  companyName: string = '';
  constructor() {}

  onSubmit() {
    const data = {
      name: this.name,
      companyName: this.companyName,
      message: this.message,
    };
    this.OnAddPost.emit(data);

    (this.name = ''), (this.companyName = ''), (this.message = '');
  }
  ngOnInit() {}
}
