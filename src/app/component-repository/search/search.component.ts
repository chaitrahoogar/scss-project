import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'groome-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchValue:string = '';
    @Output()
    searchChange: EventEmitter<any>;
    clearSearch() {
      this.searchValue= "";
      this.searchChange.next("");
    }
    valueChange(newValue){
      this.searchValue = newValue;
      this.searchChange.next(newValue);
    
    }
  constructor() {
    this.searchChange = new EventEmitter();
   }

  ngOnInit() {
   
  }
   

}
