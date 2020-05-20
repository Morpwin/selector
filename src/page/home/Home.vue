<template>
    <div class="home">
        <main>
            <router-link tag="div" to="/result">抽取事件</router-link>
            <router-link tag="div" to="/item">查看事件</router-link>
        </main>        
    </div>
</template>

<script>

export default {
    name: "Home"
}
</script>

<style lang="less" scoped>
    .home {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: url("../../assets/images/bg.jpg") no-repeat;
    background-size: 100% 100%;
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 60%;
    }
    main > div {
        width: 200px;
        border-radius: 16px;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid #eee;
        color: #fff;
        margin-top: 40px;
        text-align: center;
        line-height: 100px;
    }
}
</style>
    