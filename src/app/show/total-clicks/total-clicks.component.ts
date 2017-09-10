import { Component, OnInit, Input } from '@angular/core';

import { Counter } from '../../model/Counter';


@Component({
  selector: 'app-total-clicks',
  templateUrl: './total-clicks.component.html',
  styleUrls: ['./total-clicks.component.css']
})
export class TotalClicksComponent implements OnInit {
  @Input() counter: Counter;

  constructor() { }

  ngOnInit() {
  }

}
