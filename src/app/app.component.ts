import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { INCREMENT, DECREMENT, RESET, CounterState } from './store/counterReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<CounterState>;
  data: any;
  
    constructor(private store: Store<CounterState>){
      this.counter$ = store.select('counterStore');
      this.counter$.subscribe(data => this.data = data);
    }
  
    increment(){
      console.log('data=', this.data);
      this.store.dispatch({ type: INCREMENT, payload: {'button': 'add pressed', amount: 3} });
    }
  
    decrement(){
      this.store.dispatch({ type: DECREMENT, payload: {'button': 'minus pressed', amount: 5} });
    }
  
    reset(){
      this.store.dispatch({ type: RESET, payload: {'button': 'reset pressed'} });
    }
}
