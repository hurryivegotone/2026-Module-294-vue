import { votes, setVotes } from './votingStore';

const Voting = () => {
  const voteYes = () => setVotes('yes', votes.yes + 1);
  const voteNo = () => setVotes('no', votes.no + 1);

  return (
    <div>
      <h2>Simple Voting</h2>
      <p>Yes: {votes.yes}</p>
      <p>No: {votes.no}</p>
      <button onClick={voteYes}>Vote Yes</button>
      <button onClick={voteNo}>Vote No</button>
    </div>
  );
};

export default Voting;