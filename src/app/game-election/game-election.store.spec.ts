import { GameElectionStore } from "./game-election.store";
import { TestBed } from "@angular/core/testing";

describe('GameElectionStore', () => {
  let store: GameElectionStore;

  const MOCK_CANDIDATES = [{name: 'Test Game 1', votes: 0}, {name: 'Test Game 2', votes: 5}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameElectionStore]
    });

    store = new GameElectionStore();
    store.setState({
      candidates: MOCK_CANDIDATES
    });
  });

  it('should correctly add a vote to a candidate', () => {
    store.addVote(MOCK_CANDIDATES[1]);
    expect(store.state.candidates[0].votes).toBe(0);
    expect(store.state.candidates[1].votes).toBe(6);
  });

  it('should correctly add a candidate', () => {
    store.addCandidate('Test candidate 3');
    expect(store.state.candidates[2].name).toBe('Test candidate 3');
  });
});
