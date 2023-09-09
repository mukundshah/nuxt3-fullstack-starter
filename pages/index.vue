<script setup lang="ts">
import { useFetch } from '#app'

const { data } = useFetch('api/user')
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Home page content goes here.</p>
  </div>
</template>
