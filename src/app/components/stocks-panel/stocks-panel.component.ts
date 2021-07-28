import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks-panel',
  templateUrl: './stocks-panel.component.html',
  styleUrls: ['./stocks-panel.component.scss']
})
export class StocksPanelComponent implements OnInit {

  public stocksData :any = [
    {exchange: 'NYSE', stock : 'ICL', rate: 6.84, dayChange: -1.86, time: '7:00AM'},
    {exchange: 'TASE', stock : 'ICL', rate: 22.43, dayChange: 0.22, time: '3:36AM'},
    {exchange: null, stock : 'Potach', rate: 202.50, dayChange: 3.86, time: '3:36AM'},
    {exchange: 'NYSE', stock : 'ICL', rate: 6.84, dayChange: -1.86, time: '7:00AM'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
