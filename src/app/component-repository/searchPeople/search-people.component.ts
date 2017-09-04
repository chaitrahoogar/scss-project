import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'groome-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  @Input() list:any[];
  searchText:string;
  displayList:any[];
  invitePeople="";
  constructor() {
    
   }

  ngOnInit() {
    this.displayList=this.list;
  this.invitePeople="Invite people";
  }
  searchChange(searchValue){
    console.log(searchValue);
    if(searchValue.length>0){
    this.displayList=this.list.filter(val=>{

      return val.mail.includes(searchValue);
    })
  }
  else{
    this.displayList=this.list;
  }

} 

putValue(serachData){
  this.invitePeople=serachData;
}

}
