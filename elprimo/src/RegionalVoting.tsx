import { regionalVotes, setRegionalVotes } from './regionalVotingStore';

const RegionalVotingBoard = () => {
  const vote = (region: string, type: 'yes' | 'no' | 'abstain') =>
    setRegionalVotes(region, type, regionalVotes[region][type] + 1);

  return (
    <div>
      <h2>Regional Voting Boards</h2>
      {Object.keys(regionalVotes).map(region => (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{region}</h3>
          <p>Yes: {regionalVotes[region].yes}</p>
          <p>No: {regionalVotes[region].no}</p>
          <p>Abstain: {regionalVotes[region].abstain}</p>
          <button onClick={() => vote(region, 'yes')}>Vote Yes</button>
          <button onClick={() => vote(region, 'no')}>Vote No</button>
          <button onClick={() => vote(region, 'abstain')}>Abstain</button>
        </div>
      ))}
    </div>
  );
};

export default RegionalVotingBoard;