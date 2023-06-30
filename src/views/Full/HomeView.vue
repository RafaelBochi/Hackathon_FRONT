<script setup>
import { useUserStore } from '../../stores/user';

const userStore = useUserStore();

function logout() {
    userStore.logout();
}
</script>

<template>
  <main>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>

        <a @click="logout">
          <p>
            logout  
          </p>
        </a>
    </nav>
    Home
  </main>
</template>

<style>

</style>
