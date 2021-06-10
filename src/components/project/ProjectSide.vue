<template>
  <div class="side">
      <div class="side-items">
        <div v-for="item in items" class="side-item" :key="item.title">
            <span :class="`iconfont icon-${item.icon}`"></span>
            <!-- <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wenjianjia"></use>
            </svg> -->
            {{item.title}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {
                    title: "项目",
                    icon: "wenjianjia"
                },{
                    title: "好友",
                    icon: "renwu"
                },
                {
                    title: "社区",
                    icon: "shequ"
                },
                {
                    title: "个人",
                    icon: "geren"
                }
                ,{
                    title: "系统",
                    icon: "chilun"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.side{
    width: 15%;
    height: 100%;
    border-right: 1px solid #d00;
    .side-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .side-item{
            margin-left: 1rem;
            padding: 01rem;
            font-size: 16px;
            letter-spacing: 1px;
            text-shadow: 0 1px 1px rgba(gray, 0.5);
            &:first-of-type{
                margin-top: 1rem;
            }
        }
    }
}
</style>