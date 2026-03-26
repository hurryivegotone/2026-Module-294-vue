import { siKelvin, setSiKelvin } from './weatherStore';

const WeatherStation = () => {
  // this is a comment to display something
  const degreesCelsius = () => siKelvin() - 273.15;
  const degreesFahrenheit = () =>
    (siKelvin() - 273.15) * 9 / 5 + 32;

  const change = (delta: number) => {
    setSiKelvin(prev => prev + delta);
  };

  return (
    <div>
      <h2>Weather Station</h2>
      <p>Kelvin: {siKelvin()}</p>
      <p>Celsius: {degreesCelsius().toFixed(2)}</p>
      <p>Fahrenheit: {degreesFahrenheit().toFixed(2)}</p>

      <button onClick={() => change(1)}>+1 K</button>
      <button onClick={() => change(-1)}>-1 K</button>
    </div>
  );
};

export default WeatherStation;
