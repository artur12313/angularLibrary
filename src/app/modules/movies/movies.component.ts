import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/modules/movies/movie-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  searchForm = this.formBuilder.group({
    search: '',
  });

  moviesData:any = [];
  constructor(
    private movies:MovieServiceService,
    private formBuilder: FormBuilder,
    )
  {
    this.movies.getData().subscribe(data=>{
      this.moviesData = data;
      console.log(this.moviesData);
    }
    )
  }

  ngOnInit(): void {
  }

}
