<template>
  <div class="message-box">
    <h3>短信验证码</h3>
    <p>短信已成功发送至您的手机，请输入短信验证码</p>
    <div class="message-body">
        <el-input maxlength="6" v-model="captcha" class="message-input"></el-input>
    </div>
    <div class="message-footer">
        <el-button :disabled="resendDisabled" type="success" @click="resend">{{resendName}}</el-button>
        <el-button type="primary" @click="next">注册</el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { _regist } from '../../api/auth'
import store from '../../store';
export default {
    name: "Message",
    data(){
        return {
            captcha: "",
            resendName: "重新发送",
            resendDisabled: false
        }
    },
    methods: {
        resend(){
            return new Promise((res, rej) => {
                if(this.resendName != '重新发送'){
                    rej()
                }
                this.captcha = ""
                ElMessage.warning({
                    type: "warning",
                    message: "短信已重新发送"
                })
                res()
            })
            .then(() => {
                this.resendName = 60
                const counter = setInterval(() => {
                    this.resendName = this.resendName - 1;
                    if(this.resendName === 0){
                        this.resendName="重新发送"
                        this.resendDisabled = false
                        clearInterval(counter);
                    }
                }, 1000)
            })
        },

        verify(){
            return new Promise((res, rej) => {
                // 1.进行注册验证码校验
                res()
            })
            .then(() => {
                this.next()
            })
        },

        next(){
            const registForm = JSON.parse(sessionStorage.getItem('regist'));
            _regist(registForm)
            /**检查注册是否成功 */
            .then(res => {
                if(typeof res === number) throw ''
                return res
            })
            /** 提示用户注册成功*/
            .then(() => {
                ElMessage.success({
                    type: "success",
                    message: res
                })
                return;
            })
            /**跳转登录页面 */
            .then(() => {
                this.changeEvent("login")
            })
        },
        changeEvent(eventName){
            store.commit("setEvent", eventName)
        },
    }
}
</script>

<style lang="scss" scoped>
.message-box{
    background: #fff;
    padding: 70px 60px;
    text-align: left;
    h4{
        padding-bottom: 1rem;;
    }
    .message-body{
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            font-size: 12px;
            padding-bottom: 2rem;
        }
        .message-input{
            width: 10rem;
        }
    }
    .message-footer{
        text-align: center;
    }
}
</style>