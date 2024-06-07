import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-qatar',
  standalone: true,
  imports: [],
  templateUrl: './qatar.component.html',
  styleUrl: './qatar.component.css'
})
export class QatarComponent {
  constructor(private http: HttpClient) { }

  getData(){
    this.http.get('http://localhost:3010/DavidAlcaraz/jugadors').subscribe(res => {
      console.log(res);
    })
  }

  postData(nom: string){
  this.http.post('http://localhost:3010/DavidAlcaraz/mvp', {nom: nom}).subscribe(res => {
    console.log(res);
  })
  }
}
