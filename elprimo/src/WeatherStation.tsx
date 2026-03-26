import { createSignal } from 'solid-js';
import { siKelvin, setSiKelvin } from './weatherStore';

const WeatherStation = () => {
  // Explicit signals for Celsius and Fahrenheit
  const [degreesCelsius, setDegreesCelsius] = createSignal(siKelvin() - 273.15);
  const [degreesFahrenheit, setDegreesFahrenheit] = createSignal((siKelvin() - 273.15) * 9 / 5 + 32);

  const change = (delta: number) => {
    // Update Kelvin
    setSiKelvin(prevKelvin => {
      const newKelvin = prevKelvin + delta;

      // Explicitly update derived signals
      setDegreesCelsius(newKelvin - 273.15);
      setDegreesFahrenheit((newKelvin - 273.15) * 9 / 5 + 32);

      return newKelvin;
    });
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