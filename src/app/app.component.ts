import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makeathon';
  data:Array<any>=["xyz","xyz","xyz","xyz","xyz","xyz","xyz","xyz","xyz","xyz"]
  data1:Array<any>=[...this.data]
  fileToUpload: File | null |undefined= null;
  handleFileInput(files: FileList | null) {
    this.fileToUpload = files?.item(0);
    console.log(this.fileToUpload);
    
}
}
