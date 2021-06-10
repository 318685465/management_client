<template>
  <div class="side">
      <div v-for="item in items" :key="item.title">
          {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {
                    title: "项目"
                },{
                    title: "好友"
                },
                {
                    title: "社区"
                },
                {
                    title: "个人"
                }
                ,{
                    title: "系统"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.slide{
    width: 10%;
    height: 100%;
    background-color: #d00;
}
</style>