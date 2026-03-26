import { regionalVotes } from './regionalVotingStore';

const RegionalVotingDashboard = () => {
  const totalYes = () => Object.values(regionalVotes).reduce((sum, r) => sum + r.yes, 0);
  const totalNo = () => Object.values(regionalVotes).reduce((sum, r) => sum + r.no, 0);
  const totalAbstain = () => Object.values(regionalVotes).reduce((sum, r) => sum + r.abstain, 0);
  const totalVotes = () => totalYes() + totalNo() + totalAbstain();

  const percent = (count: number) =>
    totalVotes() ? ((count / totalVotes()) * 100).toFixed(1) : '0';

  return (
    <div>
      <h2>Voting Results</h2>
      <p>Total Votes: {totalVotes()}</p>
      <p>Yes: {totalYes()} ({percent(totalYes())}%)</p>
      <p>No: {totalNo()} ({percent(totalNo())}%)</p>
      <p>Abstain: {totalAbstain()} ({percent(totalAbstain())}%)</p>

      {/* Voting bar */}
      <div
        style={{
          display: 'flex',
          width: '100%',            // full width of container
          height: '25px',
          'margin-top': '10px',
          'border': '1px solid #ccc',
          'border-radius': '4px',
          'overflow': 'hidden',
        }}
      >
        <div style={{ width: `${percent(totalYes())}%`, background: 'green' }}></div>
        <div style={{ width: `${percent(totalNo())}%`, background: 'red' }}></div>
        <div style={{ width: `${percent(totalAbstain())}%`, background: 'gray' }}></div>
      </div>
    </div>
  );
};

export default RegionalVotingDashboard;