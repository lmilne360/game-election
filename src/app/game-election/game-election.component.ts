import { Component, OnInit } from '@angular/core';
import { GameElectionStore } from './game-election-store.store';
import { map, distinctUntilChanged } from 'rxjs/operators'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-election',
  templateUrl: './game-election.component.html',
  styleUrls: ['./game-election.component.scss'],
  providers: [GameElectionStore]
})
export class GameElectionComponent implements OnInit {

  constructor(public store: GameElectionStore) { }

  ngOnInit() {
    this.store.state$
    .pipe(map(state => state.candidates),distinctUntilChanged()) // Subscribes to the updates on the candidates subset of the state
  }

}
