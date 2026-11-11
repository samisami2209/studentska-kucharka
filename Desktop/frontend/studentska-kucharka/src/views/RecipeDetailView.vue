<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>Detail receptu</h1>
  <p>ID receptu: {{ route.params.id }}</p>
</template>