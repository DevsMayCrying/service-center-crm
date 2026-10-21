<template>
  <div class="login-container">
    <div class="login-card">
      <h2>ServicePhone CRM</h2>
      <p class="subtitle">Войдите, чтобы продолжить работу</p>
      
      <div class="field">
        <label for="username">Логин</label>
        <InputText id="username" v-model="username" placeholder="Введите ваш логин" />
      </div>

      <div class="field">
        <label for="password">Пароль</label>
        <Password id="password" v-model="password" :feedback="false" placeholder="Введите пароль" toggleMask />
      </div>

      <Button label="Войти" @click="handleLogin" class="p-button-raised" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Вход:', username.value);
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Графитовый темный фон */
}

.login-card {
  background-color: #1e1e1e; /* Темно-серая карточка */
  color: #ffffff; /* Белый текст */
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 350px;
  text-align: center;
}

.subtitle {
  color: #a0a0a0; /* Приглушенный серый для подзаголовка */
  margin-bottom: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
</style>