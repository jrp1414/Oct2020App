import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoggerService } from './services/logger.service';

@Component({
  // selector: 'app-root',  
  // selector:"[app-root]",
  selector: ".app-root",
  // template:"<h1>Inline Template example</h1>"+
  //             "<h2>Second line of template</h2>"
  // template: `
  // <h1>Multiline template example</h1>
  // <h2>Multiline template example</h2>
  // `
  templateUrl: "./app.component.html",
  // styles:[
  //   `
  //   h1{
  //     background-color: aqua;
  //   }
  //   `
  // ]
  styleUrls: [
    "./app.component.css"
  ],
  // providers: [LoggerService]
})
export class AppComponent {
  /**
   *
   */
  // constructor(private logger: LoggerService) {
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:{
          this.loading = false;
          break;
        }
        default:
          break;
      }
    });
  }

  loading: boolean = false;

}
