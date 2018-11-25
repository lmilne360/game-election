import { Candidate } from "../core/candidate";

const CANDIDATES = [
  {name: 'Mario Kart', votes: 5},
  {name: 'Dark Souls', votes: 4},
  {name: 'Soul Calibur', votes: 3},
  {name: 'OverWatch', votes: 2},
  {name: 'Minecraft', votes: 1},
];

export class GameElectionState {
  candidates: Candidate[] = CANDIDATES;
}
