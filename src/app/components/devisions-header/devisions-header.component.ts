import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-devisions-header',
  templateUrl: './devisions-header.component.html',
  styleUrls: ['./devisions-header.component.scss']
})
export class DevisionsHeaderComponent implements OnInit {

  
  public devisions: string[] = ['ICL', 'IP', 'POTASH', 'PS', 'SF'];
  public activeStyle: any;
   
  @ViewChild('ul') someInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
    
  }
  
  public changeStyle(e): void {
    console.log(this.someInput.nativeElement.offsetLeft , e.target.offsetLeft )
    this.activeStyle = {
      left: ( e.target.offsetLeft) + 'px',
      width: e.target.offsetWidth + 'px',
    }
  }

}
