import { createStore } from 'solid-js/store';

// shared reactive store for votes
const [votes, setVotes] = createStore({ yes: 0, no: 0 });

export { votes, setVotes };

