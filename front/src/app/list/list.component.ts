import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list=null;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('http://35.236.250.4:8300/rest/webapi/api/getRecords').subscribe(data => {
    this.list = data;
    })
  }

}
