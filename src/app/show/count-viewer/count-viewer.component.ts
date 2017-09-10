import { Component, OnInit, Input } from '@angular/core';

import { Counter } from '../../model/Counter';

@Component({
  selector: 'app-count-viewer',
  templateUrl: './count-viewer.component.html',
  styleUrls: ['./count-viewer.component.css']
})
export class CountViewerComponent implements OnInit {
  @Input() counter: Counter;
  @Input() stlyeNumber: string;

  constructor() { }

  ngOnInit() {
  }

}
