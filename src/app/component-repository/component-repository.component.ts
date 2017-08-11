import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-repository',
  templateUrl: './component-repository.component.html',
  styleUrls: ['./component-repository.component.scss']
})
export class ComponentRepositoryComponent implements OnInit {
 model={};
  constructor() { }
searchValue:string = '';
  clearSearch() {
    this.searchValue= " ";
  }
  ngOnInit() {
  }

}
