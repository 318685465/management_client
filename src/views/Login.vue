<template>
  <div class="login">
      <div class="login-img">
        <img :src="login_background" >
        <div class="login-img-mak"></div>
      </div>
      <div class="login-card" v-if="event === 'login'">
          <div class="login-bg"></div>
          <LoginForm />
      </div>
      <div class="login-card" v-else-if="event === 'regist'">
          <div class="login-bg"></div>
          <RegistForm />
      </div>
      <div class="login-card" v-else-if="event === 'alter'">
          <div class="login-bg"></div>
          <AlterForm />
      </div>
  </div>
</template>

<script>
import { _hello } from '../api/user/index'
import LoginForm from '../components/login/LoginForm.vue'
import RegistForm from '../components/login/RegistForm.vue'
import AlterForm from '../components/login/AlterForm.vue'
import login_background from '../assets/images/vscode_bg.jpg'
export default {
    components: { LoginForm, RegistForm, AlterForm },
    setup(){},
    data(){
        return {
            login_background,
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
            console.log(this.event)
        }
    }
}
</script>

<style lang="scss">
.login{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        img{
            width: 100%;
            height: 100%;
        }
        .login-img-mak{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0.1);
        }
    }
    .login-card{
        width: 50%;
        height: 60%;
        position: absolute;
        right: 10%;
        top: 18%;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        .login-bg{
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