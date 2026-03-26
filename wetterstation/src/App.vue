<script setup>
import { ref, computed } from 'vue'

const si_kelvin = ref(283)

const degrees_celsius = computed(() => {
  return (si_kelvin.value - 273.15);
})

const degrees_fahrenheit = computed(() => {
  return (si_kelvin.value - 273.15) * 9 / 5 + 32;
})

const celsius = ref(si_kelvin.value - 273.15);

const change = (delta) => {
  si_kelvin.value += delta;
}
</script>

<template>
  <h1>
    Wetterstation
  </h1>
  <table class="table">
    <tbody>
      <tr>
        <th>Temperature in Degrees Celsius</th>
        <td>{{ degrees_celsius.toFixed(2) }}°C</td>
      </tr>
      <tr>
        <th>Temperature in Degrees Fahrenheit</th>
        <td>{{ degrees_fahrenheit.toFixed(2) }}°F</td>
      </tr>
      <tr>
        <th>Temperature in Kelvin</th>
        <td>{{ si_kelvin.toFixed(2) }} K</td>
      </tr>
    </tbody>
  </table>
  <div>
    <button @click="change(-1)">
      Es wird kälter
    </button>
    <button @click="change(1)">
      Es wird wärmer
    </button>
  </div>
</template>