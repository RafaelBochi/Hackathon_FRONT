<script setup>
import FormLoginComponent from './FormLoginComponent.vue';
</script>


<template>
    <main>
        <img class="logo" src="/logo-principal-green.png" alt="">

        <div class="banner">
            <span class="title">
                <h1>
                    VOCÊ VOLTOU!
                </h1>
                <h3>
                    Ficamos felizes em te ver novamente
                </h3>
            </span>

            <img src="/horseandbook.jpg" alt="">
        </div>

        <FormLoginComponent class="form"/>

        <span class="changeToLogin">
            <p>
                Não possui uma conta?
            </p>
            <p @click="$emit('changeAuth')">
                Crie agora!
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
        left: 0;
        top: 0;
    }

    .banner {
        position: absolute;
        padding-left: 7%;
        background-color: #344734;
        top: -5%;
        width: 40%;
        height: 110vh;
        border-radius: 9% 0% 0% 9% / 50% 50% 50% 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;
        animation: banner 1s ease forwards;
    }

    @keyframes banner {
        0% {
            left: 0;
            width: 150%;
            border-radius: 0% 9% 9% 0% / 50% 50% 50% 50%;
        }

        100% {
            left: 60%;
            border-radius: 9% 0% 0% 9% / 50% 50% 50% 50%;
        }
    }


    .title {
        display: flex;
        flex-direction: column;
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
        left: 0;
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
            transform: translateX(-100%);
        }

        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
</style>