<script setup>
import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'

const text = ref('Mein Text')
const option = ref('Zitronen')
const checkbox = ref(false)
const radio = ref('bananen')
</script>

<template>
  <HelloWorld text1="People" :showText="checkbox"/><br>

  <input type="text" v-model="text">
  <select v-model="option">
    <option value="Zitronen">Zitronen</option>
    <option value="Orangen">Orangen</option>
    <option value="Limetten">Limetten</option>
  </select><br>

  <input type="checkbox" v-model="checkbox" id="checkbox"> 
  <label for="checkbox">Checkbox</label><br>
  <input type="radio" v-model="radio" value="Bananen" id="bananen"> <label for="bananen">Bananen</label><br>
  <input type="radio" v-model="radio" value="Äpfel" id="apfel">
  <label for="apfel">Äpfel</label><br>
  <input type="radio" v-model="radio" value="Birnen" id="birnen"> <label for="birnen">Birnen</label><br>

  <h2>Ausgewählte Daten</h2>
  Text: {{ text }}<br>
  Option: {{ option }}<br>
  Checkbox: {{ checkbox }}<br>
  Radiobuttons: {{ radio }}
</template>
