<template>
  <div class="auth">
      <div class="auth-img">
        <img :src="auth_background" >
        <div class="auth-img-mask"></div>
      </div>
      <div class="auth-card" v-if="event === 'login'">
          <div class="auth-bg"></div>
          <LoginForm />
      </div>
      <div class="auth-card" v-else-if="event === 'regist'">
          <div class="auth-bg"></div>
          <RegistForm />
      </div>
      <div class="auth-card" v-else-if="event === 'alter'">
          <div class="auth-bg"></div>
          <AlterForm />
      </div>
      <div class="auth-card" v-else-if="event === 'message'">
          <div class="auth-bg"></div>
          <MessageForm />
      </div>
  </div>
</template>

<script>
import { _hello } from '../api/user/index'
import LoginForm from '../components/auth/LoginForm.vue'
import RegistForm from '../components/auth/RegistForm.vue'
import AlterForm from '../components/auth/AlterForm.vue'
import MessageForm from '../components/auth/MessageForm.vue'
import auth_background from '@image/vscode_bg.jpg'
export default {
    components: { LoginForm, RegistForm, AlterForm, MessageForm },
    setup(){},
    data(){
        return {
            auth_background,
            event: "login"
        }
    },
    computed: {
        Event(){
            return this.$store.state.event
        }
    },
    watch: {
        Event(newEvent){
            this.event = newEvent;
        }
    }
}
</script>

<style lang="scss" scoped>
.auth{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .auth-img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        img{
            width: 100%;
            height: 100%;
        }
        .auth-img-mak{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0.1);
        }
    }
    .auth-card{
        width: 60%;
        height: 60%;
        position: absolute;
        right: 10%;
        top: 18%;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        .auth-bg{
            width: 50%;
            height: 100%;
            border-radius: 10px 0 0 10px;
            background-color: rgba($color: #000000, $alpha: 0.1);
        }
        .login-form{
            width: 50%;
            background-color: #fff;
            padding: 70px 60px;
            border-radius: 0 10px 10px 0;
        }
    }
}
</style>