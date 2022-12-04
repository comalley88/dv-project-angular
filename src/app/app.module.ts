import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ButtonComponent } from './components/button/button.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PostsComponent,
    PostCardComponent,
    ButtonComponent,
    CommentsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
