import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  newPost = 'NO CONTENT';
  test = 'empty value';

  onAddPost(){

    this.newPost = 'The user\'s post';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
