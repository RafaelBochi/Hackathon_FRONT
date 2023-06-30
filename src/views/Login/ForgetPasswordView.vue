<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const emailInput = ref('');

function forgetPassword() {
    const email = emailInput.value;

    userStore.forgetPassword(email);
}
</script>

<template>
    <main>
        <section class="form">
            <i class="iconLock">
                <font-awesome-icon :icon="['fas', 'lock']" size="xl" style="color: #ededed;" />
            </i>

            <h2>Forget Password</h2>

            <div class="inputEmail">
                <input type="text" required v-model="emailInput">
                <label>Email</label>
                <i></i>
            </div>

            <button @click="forgetPassword">
                Enviar Email
            </button>
        </section>
    </main>
</template>

<style scoped>
    main {
        background-color: var(--secundary-color);
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form {
        position: relative;
        background-color: var(--white);
        padding: 1% 4%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        border-radius: 10px;
        width: 25%;
    }

    .iconLock {
        background-color: var(--primary-color);
        position: absolute;
        padding: 3%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -10%;
        left: 5%;
    }

    h2 {
        color: var(--primary-color);
        font-weight: bolder;
    }

    .inputEmail {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .inputEmail input{
        outline: 0;
        border: none;
        padding: 2%;
        padding-left: 5%;
        border-radius: 20px;
        height: 30px;
        font-size: 1.2rem;
        background-color: transparent;
        z-index: 2;
        color: var(--white);
    }

    .inputEmail label {
        top: 11px;
        position: absolute;
        left: 5%;
        transition: all 0.5s ease;
    }

    .inputEmail i {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
        bottom: 0;
        transition: all 0.5s ease;
        z-index: 1;
    }

    .inputEmail input:focus + label, .inputEmail input:valid + label {
        top: -14px;
        color: var(--primary-color);
    }

    .inputEmail input:focus + label + i, .inputEmail input:valid + label + i {
        height: 30px;
        border-radius: 10px;
    }

    button {
        padding: 2% 0;
        border: none;
        background-color: var(--primary-color);
        border-radius: 20px;
        width: 70%;
        margin: auto;
        color: var(--white);
        font-weight: bolder;
        cursor: pointer;
        border: 2px solid var(--primary-color);
        transition: all 0.5s ease;
        letter-spacing: 0.07rem;
    }

    button:hover {
        background-color: var(--white);
        color: var(--primary-color);
    }
</style>