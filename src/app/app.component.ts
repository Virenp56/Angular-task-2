import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-2';

  // //P2C
  // public name: string = "Viren";

  // //C2P
  // parentFunction(data?: any) {
  //   console.log(data);
  // }

  // //Task-2
  parentFunction(data?: any) {
    console.log(data);
  }
}
