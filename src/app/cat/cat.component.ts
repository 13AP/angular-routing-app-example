import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private myRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  //read only property, typescript style
  public get catName(): string {
    return this.myRoute.snapshot.paramMap.get("name");
  }
}
