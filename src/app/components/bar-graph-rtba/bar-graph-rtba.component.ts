import { Component, Input, OnInit } from '@angular/core';
import GraphData from 'src/app/model/data.MODEL';

@Component({
  selector: 'app-bar-graph-rtba',
  templateUrl: './bar-graph-rtba.component.html',
  styleUrls: ['./bar-graph-rtba.component.scss']
})
export class BarGraphRtbaComponent implements OnInit {
  
  @Input() data !: GraphData;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
