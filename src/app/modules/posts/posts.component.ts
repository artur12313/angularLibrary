import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/modules/posts/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsData:any = [];
  constructor(private posts:PostServiceService) 
  {
    this.posts.getData().subscribe(data=>{
      this.postsData = data;
      console.log(this.postsData);
    }
    )
  }

  ngOnInit(): void {
  }

}
