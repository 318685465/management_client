<template>
  <div class="login">
      <div class="login-card">
          <div class="login-bg"></div>
          <LoginForm />
      </div>
  </div>
</template>

<script>
import { _hello } from '../api/user/index'
import LoginForm from '../components/login/LoginForm.vue'
export default {
    components: { LoginForm }
}
</script>

<style>

</style>