import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent implements OnInit {

  public timeTabs : string[] = ['M', 'QTD' , 'YTD'];
  public toggleValue: string;
  public paginators : string[] = ['1','2','3'];
  public paginatorIndex : number = 0;
  options: any;
  slideConfig = {"slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    customPaging : function(slider, i) {
        return `<button class="paginator" [ngClass]="{'active-paginator': ${i} === paginatorIndex}" (click)="paginatorFun(${i})"></button>`;
    },
  };
  
  constructor() { }

  ngOnInit(): void {
 this.options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      position: 'right'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }],
   grid: 
     {borderColor: '#ff00cf'}
};
  }
  public toggleUi(): void {
  } 

  public paginatorFun(index: number): void{
    this.paginatorIndex = index;
  }
}
