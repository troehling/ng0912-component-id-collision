import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
// import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {NzTableComponent} from 'ng-zorro-antd/table';

// const nzDatepicker = NzDatePickerModule;
const cdk = CdkVirtualScrollViewport;
const nzTableComponent = NzTableComponent;


@Component({
  selector: 'app-root',
  imports: [RouterOutlet/*, CdkVirtualScrollViewport*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-id-collision';
  // constructor() {
  //   console.log(nzTableComponent, cdk);
  // }
}
