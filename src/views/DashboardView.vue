<template>
  <div class="layout">
    <header class="header">
      <h2>ServicePhone CRM</h2>
      <div class="user-info">Мастер: Денис</div>
    </header>

    <main class="content">
      <router-view /> <!-- Сюда будут подгружаться Заказы, Клиенты и т.д. -->
    </main>

    <footer class="footer">
      &copy; 2026 ServicePhone. Все права защищены.
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
}

.content {
  flex: 1;
  padding: 2rem;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #1e1e1e;
  color: #666;
  border-top: 1px solid #333;
}
</style>