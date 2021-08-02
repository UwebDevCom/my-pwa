import { Component, OnInit } from '@angular/core';
import GraphDataMock from 'src/assets/graph.mock';
import GraphData from '../model/data.MODEL';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public mockdatas : GraphData  = GraphDataMock;
  
  constructor() { }

  ngOnInit(): void {
  console.log(this.mockdatas)
  }

}
