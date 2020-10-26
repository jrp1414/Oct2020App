import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',  
  // selector:"[app-root]",
  selector:".app-root",
  // template:"<h1>Inline Template example</h1>"+
  //             "<h2>Second line of template</h2>"
  // template: `
  // <h1>Multiline template example</h1>
  // <h2>Multiline template example</h2>
  // `
  templateUrl:"./app.component.html",
  // styles:[
  //   `
  //   h1{
  //     background-color: aqua;
  //   }
  //   `
  // ]
  styleUrls:[
    "./app.component.css"
  ]
})
export class AppComponent {  
}
 