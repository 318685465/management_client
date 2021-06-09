<template>
  <div class="login-form">
      <!-- 登录表单头部 -->
      <header class="login-title">
          <h2>登录</h2>
          <h4>
            你尚未拥有账户？点击
            <span class="login-regist" @click="regist">注册</span>
            进行登录
          </h4>
      </header>
      <article>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="login-form-body"
          >
            <el-form-item :class="item.name" v-for="item in LoginForm" :key="item.title" :label="item.title" :prop="item.name">
                <el-input
                    v-model="LoginFormData[item.name]"
                    :maxLength="item.meta.max"
                    :type="item.meta.type? item.meta.type:''"
                ></el-input>
            </el-form-item>
          </el-form>

          <el-checkbox v-model="ready" class="login-ready">
              我已经阅读并同意
              <span>《相关协议》</span>
          </el-checkbox>

          <div class="login-button">
              <el-button type="warning" @click="alter">找回</el-button>
              <el-button type="primary" @click="login">登录</el-button>
          </div>
      </article>
      <!-- 登录表单底部 -->
      <footer>
          <h3>其他方式登录？</h3>
          <div class="login-other"></div>
      </footer>
  </div>
</template>

<script>
import { _login } from '../../api/auth'
export default {
    name: "LoginForm",
    data(){
        return {
            LoginFormData: {
                phone: "",
                password: ""
            },
            LoginForm: [
                {
                    title: "手机号",
                    name: "phone",
                    value: "",
                    meta:{
                        max: 11
                    }
                },
                {
                    title: "登录密码",
                    name: "password",
                    value: "",
                    meta: {
                        max: 30,
                        type: "password"
                    }
                }
            ],
            rules: {
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { max: 11, message: '请输入手机号码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            },
            ready: false
        }
    },
    methods:{
        async login(){
            const res = await _login(this.LoginFormData);
            console.log(res)
            if(res.token){
                localStorage.setItem('token', res.token);
                localStorage.setItem("userid", res.userid)
            }
        },
        alter(){
            console.log('alter')
            this.$store.commit("setEvent", "alter")
        },
        regist(){
            this.$store.commit("setEvent", "regist")
        },
    }
}
</script>

<style lang="scss" scoped>
.login-form{
    .login-title{
        h2{
            font-size: 34px;
        }
        h4{
            font-size: 14px;
            color: rgba($color: gray, $alpha: 0.7);
            letter-spacing: 1px;
            padding: 8px 0;
            .login-regist{
                color: #426ab3;
                &:hover{
                    color: #6a6da9;
                    cursor: pointer;
                }
            }
        }
    }
    article{
        .login-form-body{
            .phone, .password{
                width: 80%;
                padding: 15px;
            }
        }
        .login-ready{
            span{
                color: #426ab3;
                &:hover{
                    color: #6a6da9;
                    cursor: pointer;
                }
            }
        }
        .login-button{
            text-align: right;
            padding: 20% 15% 0 0;
            button{
                width: 40%;
            }
        }
    }
    .footer{
        position: absolute;
        bottom: 10%;
        width: 60%;
        h3{
            color: rgba($color: gray, $alpha: 0.7);
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
}
</style>