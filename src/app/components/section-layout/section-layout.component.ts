import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import GraphData from 'src/app/model/data.MODEL';

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
  
  @Input()
  itemTemplate !: TemplateRef<any>;

  @Input()
  containerData !: GraphData;
  
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
  }
  public toggleUi(): void {
  } 

  public paginatorFun(index: number): void{
    this.paginatorIndex = index;
  }
}
