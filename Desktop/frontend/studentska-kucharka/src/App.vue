<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <span class="logo">Študentská kuchárka</span>
    <nav>
      <RouterLink to="/">Domov</RouterLink>
      <RouterLink to="/recepty">Recepty</RouterLink>
      <RouterLink to="/oblubene">Obľúbené</RouterLink>
      <RouterLink to="/pridat">Pridať recept</RouterLink>
    </nav>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #e86a33;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}
</style>