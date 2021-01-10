import { Component} from '@angular/core';

class Blogpost {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  title = "";
  text = "";
  blogPosts: Blogpost[] = [];

  posts(): void{
    console.log(this.title);
    console.log(this.text);
    this.blogPosts.push(new Blogpost(this.title, this.text));
    this.title = "";
    this.text = "";
  }
  constructor(){
  }

}
