<template>
  <div class="main">
    <div class="main-title">
      <div class="title-name">项目</div>
      <div class="title-item title-buttons">
        <el-button type="success" class="title-button">新增</el-button>
        <el-input
          class="title-item title-search"
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          v-model="searchValue"
        >

        </el-input>
      </div>
    </div>
    <div class="main-form">
      <el-table
        class="form"
        :data="tableData"
        style="width: 100%; height: 90%;">

        <el-table-column
          v-for="item in tableArgs"
          :key="item"
          :prop="item.prop"
          :label="item.label"
          align="center"
          :width="item.width">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button type="text" size="small">进入</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchValue: "",
      tableArgs: [
        {prop: "date", label: "创建日期"},
        {prop: "name", label: "名称"},
        {prop: "address", label: "地址"},
        {prop: "stage", label: "阶段"},
        {prop: "identify", label: "身份"},
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '实验小学改造',
          address: '华富街道5001号',
          stage: '正在施工中',
          identify: "甲方"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 85%;
  .main-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    .title-name{
      font-size: 28px;
      font-weight: bold;
      padding-left: 2rem;
    }
    .title-buttons{
      padding-right: 2rem;
      display: flex;
      .title-button{
        width: 100px;
      }
      .title-item{
        padding: 0 0.4rem;
      }
    }
  }
  .main-form{
    margin-top: 1rem;
    margin-left: 2.5%;
    width: 95%;
    height: 85%;
    border-radius: 10px;
    .form{

    }
  }
}
</style>