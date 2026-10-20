<template>
  <div class="login-container">
    <h2>Вход в систему</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
    if (!username.value || !password.value) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    console.log('Отправка данных входа:' , { username: username.value, password: password.value });

};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    background-color: #f4f4f4;
}

.loin-card {
    background: white; 
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>