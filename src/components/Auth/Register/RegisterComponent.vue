<script setup>
import FormRegisterComponent from './FormRegisterComponent.vue'
</script>

<template>
    <main>
        <img class="logo" src="/logo-principal-green.png" alt="Logo">

        <div class="banner">
            <span class="title">
                <h1>
                    BEM-VINDO
                </h1>
                <h3>
                    Registre-se e faça parte da nossa equipe!
                </h3>
            </span>

            <img src="/horseandbook.jpg" alt="">
        </div>

        <FormRegisterComponent class="form"/>

        <span class="changeToLogin">
            <p>
                Já possui uma conta?
            </p>
            <p @click="$emit('changeAuth')">
                Faça login
            </p>
        </span>
    </main>
</template>

<style scoped>
    main {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        animation: main 1s ease forwards;
        overflow: hidden;
    }

    @keyframes main {
        from {
            opacity: 0.3;
        }
        to {
            opacity: 1;
        }
    }

    .logo {
        width: 10%;
        position: absolute;
        right: 0;
        top: 0;
    }

    .banner {
        position: absolute;
        padding-right: 6%;
        background-color: #344734;
        top: -5%;
        width: 40%;
        height: 110vh;
        border-radius: 9% 0% 0% 9% / 50% 50% 50% 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 30px;
        animation: banner 1s ease forwards;
    }

    @keyframes banner {
        0% {
            right: 0;
            width: 150%;
            border-radius: 9% 0% 0% 9% / 50% 50% 50% 50%;
        }

        100% {
            right: 60%;
            border-radius: 0% 9% 9% 0% / 50% 50% 50% 50%;
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        top: 20%;
        left: 15%;
        text-align: center;
        color: #fff;
        gap: 10px;
        font-size: 1.8rem;
    }

    .title h3 {
        letter-spacing: 0.1rem;
        font-weight: 500;
    }
    .changeToLogin {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        gap: 5px;
        padding: 0.5%;
        font-size: 1.2rem;
    }

    .changeToLogin p:nth-child(2) {
        cursor: pointer;
        text-decoration: underline;
        color: #344734;
        font-weight: 700;
    }

    .form, .changeToLogin, .logo {
        animation: form 1.5s ease forwards;
    }

    @keyframes form {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }

        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
</style>