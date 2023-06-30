<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../../stores/user';

const userStore = useUserStore();

const usernameInput = ref('');
const emailInput = ref('');
const passwordInput = ref('');

const showPassword = ref(false);

function changeShowPassword() {
    showPassword.value = !showPassword.value;
}

function register() {
    const user = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    userStore.register(user);
}
</script>

<template>
    <section>
        <h2>
            CRIE SUA CONTA
        </h2>

        <div class="inputs">
            
            <div class="input">
                <input type="text" required v-model="usernameInput">
                <label>Username</label>
            </div>
            <div class="input">
                <input type="text" required v-model="emailInput">
                <label>Email</label>
            </div>
            <div class="input">
                <input :type="showPassword ? 'text' : 'password'" required v-model="passwordInput">
                <label>Senha</label>
                <i @click="changeShowPassword">
                    <font-awesome-icon :icon="['fas', 'eye']" size="lg" v-if="showPassword"/>
                    <font-awesome-icon :icon="['fas', 'eye-slash']" size="lg" v-else/>
                </i>
            </div>

        </div>

        <div class="button">
            <button @click="register">
                Registrar-se
            </button>
        </div>
    </section>
</template>

<style scoped>
    section {
        position: absolute;
        right: 18%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h2 {
        position: relative;
        font-family: 'Roboto', sans-serif;
        left: 3%;
        letter-spacing: 0.1rem;
        font-weight: bolder;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 300px;
    }

    .input {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1%;
        width: 100%;
    }

    .input input {
        width: 100%;
        height: 35px;
        padding: 3%;
        border: none;
        outline: none;
        font-size: 1.2rem;
        border-radius: 10px;
    }

    .input label {
        position: absolute;
        top: 7px;
        left: 2%;
        padding: 2%;
        pointer-events: none;
        transition: all 0.5s ease;
        font-size: 1.2rem;
    }
    .input input:focus + label, .input input:valid + label {
        top: -20px;
        left: 2%;
    }

    .input i {
        position: absolute;
        right: 5%;
        cursor: pointer;
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button button {
        background-color: #344734;
        padding: 2% 14%;
        border: none;
        color: #E7E3C0;
        font-weight: 750;
        letter-spacing: 0.1rem;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s all;
        border: 3px solid #344734;
        font-size: 1.4rem;
    }

    .button button:hover {
        background-color: transparent;
        color: #344734;
    }
</style>
