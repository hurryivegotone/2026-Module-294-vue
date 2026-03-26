<script setup>
  import { ref } from 'vue'
  const prefixes = [
    'Hype',
    'Biz',
    'Lolz',
    'Rofl',
    'Galaxy',
    'Biz',
    'Fan',
    'Buzz',
    'Real',
    'Solid',
    'Inter',
    'Active',
    'Swoosh',
  ]
  const suffixes = [
    'park',
    'span',
    'cloud',
    'loop',
    'verse',
    'layer',
    'er',
    'r',
    'dot',
    'dock',
    'space',
    'yard',
    'scale',
    'signal',
    'press',
    'ware',
    'port',
  ]
  const startup_name = ref("???")
  function generateName() {
  const randomIndexPrefix 
  = Math.floor(Math.random() * prefixes.length)
  const randomIndexSuffix 
  = Math.floor(Math.random() * suffixes.length)
  startup_name.value 
  = prefixes[randomIndexPrefix] 
  + suffixes[randomIndexSuffix]
}
</script>
<template>
  <div style="text-align: center">
    <h2 style="text-align: center"> 
      Your Startup is Called 
    </h2>
    <div class="gray-box" style="text-align: center">
        {{ startup_name }}
    </div>
    <button @click=generateName>
      Generate Name
    </button>
  </div>
</template>
<style>
  .gray-box {
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    font-family: sans-serif;
    font-size: 16px;
    color: #333;
  }
</style>