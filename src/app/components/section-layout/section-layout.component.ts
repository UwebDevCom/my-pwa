import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent implements OnInit {

  public timeTabs : string[] = ['M', 'QTD' , 'YTD'];
  public toggleValue: string;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleUi(): void {

  } 
}
