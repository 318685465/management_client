<template>
  <header>
      <div class="header-logo">
          <img src="" alt="">
          <span>xx项目管理平台</span>
      </div>

      <div class="header-messages">
          <div class="header-message" v-for="item in messages" :key="item.title">
            <span>{{item.title}}</span>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return {
            messages: [
                {
                    title: '我的'
                },
                {
                    title: '消息'
                },
                {
                    title: '设置'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 4px -4px #000;
    .header-logo{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            zoom: 0.2;
        }
        span{
            margin-left: 1rem;
            font-size: 14px;
        }
    }
    .header-messages{
        display: flex;
        .header-message{
            padding: 0.5rem;
            text-shadow: 0 1px 1px rgba($color: gray, $alpha: 0.5)
        }
    }
}
</style>