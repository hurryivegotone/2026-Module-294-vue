<script setup>
import { ref } from 'vue'

const tasks = ref([
  { text: 'Rasen mähen',        done: false, high_priority: false },
  { text: 'Französisch lernen', done: false, high_priority: true },
  { text: 'Einkaufen',          done: false, high_priority: true },
  { text: 'Abfall rausbringen', done: false, high_priority: true },
])
</script>

<template>
  <div class="container">
    <h2>
      Aufgabenliste
    </h2>
    
    <p>
      1 von 5 Tasks sind erledigt
    </p>

    <div class="form-group">
      <label for="task">Neuer Task</label>
      <input class="form-control" id="task" type="text">
    </div>

    <label for="prio">
      <input id="prio" type="checkbox">
      Hohe Priorität
    </label>

    <div class="form-actions">
      <button>
        Task hinzufügen
      </button>
    </div>
    
    <ul>
      <li>
        Task 1
      </li>
      <li>
        Task 2
      </li>
      <li>
        Task 3
      </li>
    </ul>
  </div>
</template>