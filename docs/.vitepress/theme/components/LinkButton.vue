<template>
    <a :href="to" class="vp-button"><slot /></a>
  </template>
  
  <script setup>
  defineProps({
    to: String
  })
  </script>
  
  <style scoped>
  .vp-button {
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    padding: 0.5em 1.2em;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 500;
    margin: 0.25em;
    transition: background-color 0.3s ease;
  }
  .vp-button:hover {
    background-color: #2563eb;
    color: #ccc;

  }
  </style>
  