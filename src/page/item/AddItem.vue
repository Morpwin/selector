<template>
  <div class="addItem">
    <div class="mask">
      <input type="text" maxlength="20" placeholder="请输入标题" v-model="obj.tip">
      <input type="text" maxlength="20" placeholder="请输入内容" v-model="obj.content">
      <div class="btn">
        <router-link tag="button" @click.native="realy()" to="/item">确定</router-link>
        <router-link tag="button" to="/item">取消</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AddItem",
    data() {
      return {
        obj: {
          tip: "",
          content: ""
        }
      }
    },
    methods: {
      realy() {
        this.$store.dispatch("addItem", this.obj)
        
        
      }
    }
}
</script>

<style lang="less" scoped>
.addItem {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    width: 50z0px;
    height: 240px;
    background-color: #fff;
    border-radius: 32px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    input {
        width: 100%;
        border: 0;
        background-color: rgba(255, 255, 255, 0);
        outline: none;
        border-bottom: 1px solid #eee;
        text-align: center;
        font-size: 28px;
    }
    input:first-child{
      margin-bottom: 20px;
    }
    .btn {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      button {
        background-color: rgba(255, 255, 255, 0);
        outline: none;
        border: 0;
        padding: 10px;
        font-size: 24px;
      }
    }
  }
}
</style>