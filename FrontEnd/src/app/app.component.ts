import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  data = '';
  constructor(private httpClient: HttpClient) {

  }

  getData() {
    let url = `${environment.endPoint}/api/hello`;
    this.httpClient.get(url)
      .subscribe((res: any) => {
        console.log(res);
        this.data = res.text;
      });
  }


}
