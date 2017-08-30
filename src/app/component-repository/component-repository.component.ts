import { Component, OnInit ,Pipe} from '@angular/core';
@Pipe ({
  name:'filter'
})
export class FilterPipe {
  transform(value, params) {
    console.log(params);
    var filter = params[0];
       
    return value.filter((item)=> {
      // for example
      return (item.name === filter);
    });
  }
}
@Component({
  selector: 'app-component-repository',
  templateUrl: './component-repository.component.html',
  styleUrls: ['./component-repository.component.scss']
})

export class ComponentRepositoryComponent implements OnInit {
 model={};
 data = [
    "val1",
    "val2",
    "val3",
    "val4",
    "val5",
    "val6",
    "test",
    "huhu"
  ];
Business = {
        "BusinessStreams":[
          {
            "option": "SOW",
            "_id": "000"
          },
          {
            "option": "Staffing",
            "_id": "001"
          },
          {
            "option": "LittleBrahma",
            "_id": "002"
          }
        ],
        "ConversationType" : [
        {
            "option": "Telephonic",
            "_id": "100",
        },
        {
            "option": "FaceToFace",
            "_id": "102"
        },
        {
            "option": "Email",
            "_id": "103"
        }
        ]
}

  constructor() { }
searchValue:string = '';
  clearSearch() {
    this.searchValue= " ";
  }
  ngOnInit() {
  }

}
