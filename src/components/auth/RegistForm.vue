<template>
  <div class="regist-form">
      <!-- 登录表单头部 -->
      <header class="regist-title">
          <h2>注册</h2>
          <h4>
            你已有账户？点击
            <span class="regist-login" @click="changeEvent('login')">登录</span>
            进行登录
          </h4>
      </header>
      <article>
          <el-form
            :model="RegistFormData"
            :rules="rules"
            ref="registForm"
            label-width="100px"
            class="regist-form-body"
          >
            <el-form-item :class="item.name" v-for="item in RegistForm" :key="item.title" :label="item.title" :prop="item.name">
                <el-input
                    v-model="RegistFormData[item.name]"
                    :maxLength="item.meta.max"
                    :type="item.meta.type? item.meta.type:''"
                ></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
                <el-input v-model="RegistFormData.captcha" maxlength="4"></el-input>
                <div v-html="captcha && captcha.img" @click="getNewCaptcha(captcha.id)"></div>
            </el-form-item>
            <el-form-item prop="ready">
                <el-checkbox-group v-model="RegistFormData.ready">
                    <el-checkbox class="regist-ready">
                        我已经阅读并同意
                        <span @click="dialogVisible = true">《相关协议》</span>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
          </el-form>


          <div class="regist-button">
              <el-button type="primary" @click="regist">注册</el-button>
          </div>
      </article>
      <el-dialog
        title="用户协议"
        v-model="dialogVisible">
        <div>
            <h3>hello world</h3>
        </div>
    </el-dialog>
      <!-- 登录表单底部 -->
      <footer>
          <h3>其他方式登录？</h3>
          <div class="regist-other"></div>
      </footer>
  </div>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import { _captcha, _regist, _verify, ICaptcha } from '../../api/auth'
import store from '../../store';
export default {
    name: "RegistForm",
    data(){
        return {
            RegistFormData: {
                phone: "",
                password: "",
                repassword: "",
                ready: [],
                captcha: ""
            },
            RegistForm: [
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
                },
                {
                    title: "确认密码",
                    name: "repassword",
                    value: "",
                    meta: {
                        max: 30,
                        type: "password"
                    }
                },
            ],
            rules: {
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { max: 11, message: '请输入手机号码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                repassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                ],
                ready: [
                    {
                        type: "array",
                        required: true,
                        message: "请阅读用户协议",
                        trigger: "change"
                    }
                ],
                captcha: [
                    { required: true, message: '请输入验证码', trigger: 'change' }
                ]
            },
            ready: false,
            dialogVisible: false,
            captcha: {
                id: '-1',
                img: ''
            }
        }
    },
    watch: {
        captcha: {
            handler(n){
                console.log(n)
            },
            deep: true
        }
    },
    methods:{
        regist(){
            (this.$refs['registForm'] as any).validate((valid: any) => {
                if (valid) {
                    this.sendRegist()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async sendRegist(){
            let { password, repassword, phone } = this.RegistFormData;
            return new Promise((res, rej) => {
                if(password != repassword){
                    ElMessage.warning({
                        message: "两次密码输入不相同",
                        type: "warning"
                    })
                    this.resetForm('registForm')
                    rej();
                }
                res('')
            })
            .then(() => {
                const captcha:ICaptcha = {
                    captcha: this.RegistFormData.captcha,
                    id: this.captcha.id
                }

                console.log(captcha)

                return _verify(captcha)
                    .then(async (res: any) => {
                        if(typeof res === 'number' ){
                            this.resetForm('registForm')
                            throw ""
                        };

                        sessionStorage.setItem(
                            "regist",
                            JSON.stringify({
                                phone,
                                password
                            })
                        )
                    })
                    .then(() => {
                        this.changeEvent("message")
                    })
            })

        },
        changeEvent(eventName: string){
            store.commit("setEvent", eventName)
        },

        async getNewCaptcha(id?: string){
            return await _captcha(id).then(res => (this.captcha as any) = res);
        },

        resetForm(formName: string){
            (this.$refs[formName] as any).resetFields();
            this.getNewCaptcha()
        }
    },
    mounted(){
        this.getNewCaptcha()
    }
}
</script>

<style lang="scss" scoped>
.regist-form{
  background-color: #fff;
  padding: 70px 60px;
    border-radius: 0 10px 10px 0;
    .regist-title{
        h2{
            font-size: 34px;
        }
        h4{
            font-size: 14px;
            color: rgba($color: gray, $alpha: 0.7);
            letter-spacing: 1px;
            padding: 8px 0;
            .regist-login{
                color: #426ab3;
                &:hover{
                    color: #6a6da9;
                    cursor: pointer;
                }
            }
        }
    }
    article{
        .regist-form-body{
            .phone, .password, .repassword{
                width: 80%;
                padding: 5px 15px;
            }
        }
        .regist-ready{
            span{
                color: #426ab3;
                &:hover{
                    color: #6a6da9;
                    cursor: pointer;
                }
            }
        }
        .regist-button{
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