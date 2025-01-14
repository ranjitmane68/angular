import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private readonly store: Store) {}

  increment() {
    //this.store.dispatch(increment({value: 5}));
    this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
  
  }
}
