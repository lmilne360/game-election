import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  // Returns the current state value
  get state(): T {
    return this._state$.getValue();
  }

  // sets the state to the passed parameter
  setState(nextState: T): void {
    this._state$.next(nextState);
  }
}
