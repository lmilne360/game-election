import { Injectable } from '@angular/core';
import { Store } from '../core/store';
import { GameElectionState } from './game-election-state';

@Injectable()
export class GameElectionStore extends Store<GameElectionState> {

  constructor() {
    // initializes new state when creating a new instance
    super(new GameElectionState());
  }
}
