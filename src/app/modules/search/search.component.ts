import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form = this.formBuilder.group({
    search: new FormControl(''),
  });
  
  constructor(
    private formBuilder: FormBuilder,
  )
  {

   }

  ngOnInit(): void {
  }

  submit()
  {

  }
}
