<script setup>
import LoginComponent from '../../components/Auth/Login/LoginComponent.vue';
import RegisterComponent from '../../components/Auth/Register/RegisterComponent.vue';
import { ref } from 'vue';

const register = ref(true);
</script>

<template>
    <RegisterComponent v-if="register" @change-auth="register = false"/>
    <LoginComponent v-else @change-auth="register = true"/>
</template>

<style>
    
</style>
