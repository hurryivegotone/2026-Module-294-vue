<script setup>
defineProps(
    {
        text1: String,
        showText: {
            type: Boolean,
            required: false,
            default: true
        }
    }
)
</script>

<template>
    Hallo {{ text1 }}

    <h1 v-if="showText">    
        Text shown
    </h1>
</template>