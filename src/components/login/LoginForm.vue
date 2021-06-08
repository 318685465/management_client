<template>
  <div class="login-form">
      <!-- 登录表单头部 -->
      <header class="login-title">
          <h2>登录</h2>
          <h4>
            你尚未拥有账户？点击
            <span class="login-regist">注册</span>
            进行登录
          </h4>
      </header>
      <article>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
          >
            <el-form-item v-for="item in LoginForm" :key="item" :label="item.name" :prop="item.title">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-form>
      </article>
      <!-- 登录表单底部 -->
      <footer></footer>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
    name: "LoginForm",
    setup(){
        const LoginFormData = reactive({
            phone: '',
            password: ''
        })
        const LoginForm = ref([
            {
                title: "手机号",
                name: 'phone',
                value: ""
            },
            {
                title: "登录密码",
                name: "password",
                value: ""
            }
        ])

        return { LoginFormData, LoginForm }
    },
    data(){
        return {
             rules: {
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { max: 11, message: '请输入手机号码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        }
    }
}
</script>

<style>

</style>