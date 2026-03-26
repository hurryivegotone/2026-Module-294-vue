import { createStore } from 'solid-js/store';

type RegionVotes = { yes: number; no: number; abstain: number };

const [regionalVotes, setRegionalVotes] = createStore<Record<string, RegionVotes>>({
  Lucerne: { yes: 0, no: 0, abstain: 0 },
  Zurich: { yes: 0, no: 0, abstain: 0 },
});

export { regionalVotes, setRegionalVotes };