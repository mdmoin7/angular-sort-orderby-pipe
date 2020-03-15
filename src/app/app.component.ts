import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  clientScrips=['html','css','javascript','angular','react'];
  data=[
  {id:100, name:'Mike'},
  {id:104, name:'John'},
  {id:102, name:'David'},
  {id:101, name:'Jane'},
  {id:103, name:'Steve'}
  ];
}
