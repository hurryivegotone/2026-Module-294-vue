import { Router, Route, A } from '@solidjs/router';
import WeatherStation from './WeatherStation';
import Voting from './Voting';
import RegionalVotingBoard from './RegionalVotingBoard';
import RegionalVotingDashboard from './RegionalVotingDashboard';

const Home = () => (
  <div>
    <h1>Home</h1>
    <A href="/weather">Go to Weather</A>
    <br />
    <A href="/voting">Go to Simple Voting</A>
    <br />
    <A href="/regional-board">Go to Vote Casting</A>
        <br />
    <A href="/regional-dashboard">Go to Results</A>
  </div>
);

const App = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/weather" component={WeatherStation} />
    <Route path="/voting" component={Voting} />
    <Route path="/regional-board" component={RegionalVotingBoard} />
    <Route path="/regional-dashboard" component={RegionalVotingDashboard} />
  </Router>
);

export default App;