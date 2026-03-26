import { Router, Route, A } from '@solidjs/router';
import WeatherStation from './WeatherStation';

const Home = () => (
  <div>
    <h1>Home</h1>
    <A href="/weather">Go to Weather</A>
  </div>
);

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/weather" component={WeatherStation} />
    </Router>
  );
};

export default App;
