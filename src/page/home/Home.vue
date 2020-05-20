<template>
    <div class="home" ref="home">
        <div class="loading" v-if="!loading"><img src="../../assets/images/loading.png" alt=""></div>
        <main v-if="loading">
            <router-link tag="button" to="/result">抽取事件</router-link>
            <router-link tag="button" to="/item">查看事件</router-link>
        </main>        
    </div>
</template>

<script>

export default {
    name: "Home",
    data() {
        return {
            loading: false
        }
    },
    mounted() {
        let home = this.$refs.home;
        let img = new Image()
        img.src = require("../../assets/images/bg.jpg");
        img.onload = () => {
            this.loading = true
            home.style.background = 'url('+ img.src +') no-repeat 0 0 / 100% 100%'
            
        }
    }
}
</script>

<style lang="less" scoped>
    .home {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 60%;
    }
    main > button {
        width: 10rem;
        border-radius: 0.8rem;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid #eee;
        color: #fff;
        margin-top: 2rem;
        text-align: center;
        line-height: 5rem;
    }
}
</style>
    