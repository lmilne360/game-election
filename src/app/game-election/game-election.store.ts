import { Injectable } from '@angular/core';
import { Store } from '../core/store';
import { GameElectionState } from './game-election-state';
import { Candidate } from '../core/candidate';

@Injectable()
export class GameElectionStore extends Store<GameElectionState> {

  constructor() {
    // initializes new state when creating a new instance
    super(new GameElectionState());
  }

  // loops though candidate objects in the state and increment the vote on the matching candidate
  addVote(candidate: Candidate): void{
    this.setState({...this.state, candidates: this.state.candidates.map( c => {
      if (c === candidate ) {
        return {...c, votes: c.votes + 1};
      }
      return c
      })
    });
  }

  // creates a new candidate from the provided name and adds to state object
  addCandidate(name: string): void {
    this.setState({
      ...this.state,
      candidates: [...this.state.candidates, {name: name, votes: 0}]
    });
  }
}
