import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-devisions-header',
  templateUrl: './devisions-header.component.html',
  styleUrls: ['./devisions-header.component.scss']
})
export class DevisionsHeaderComponent implements OnInit {

  public activeDevision: number = 0;
  public devisions: string[] = ['ICL', 'IP', 'POTASH', 'PS', 'SF'];
  public activeStyle: any;
   
  @ViewChild('ul') someInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
    
  }
  
  public changeStyle(e :any,index: number): void {
    this.activeDevision = index;
    this.activeStyle = {
      left: ( e.target.offsetLeft) + 'px',
      width: e.target.offsetWidth + 'px',
    }
  }

}
