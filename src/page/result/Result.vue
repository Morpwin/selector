<template>
    <div class="result">
        <div class="content">
            <h1>{{tip}}</h1>
            <p>{{content}}</p>
            <button @click="reset()">不服，再抽</button>
            <router-link tag="button" to="/">返回</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Result",
    data() {
        return {
            length: 0,
            id: 0,
            tip: "",
            content: "",
        }
    },
    computed: {
        ...mapGetters(["getEvents"])
    },
    mounted() {
        this.length = this.$store.state.events.length;
        this.reset();
    },
    methods: {
        reset() {
            let id = Math.floor(Math.random() * this.length + 1);
            if (this.id === id) {
                this.reset();
            } else {
                this.id = id;
            }
            this.tip = this.getEvents(this.id).tip;
            this.content = this.getEvents(this.id).content;
        }
    }
};
</script>

<style lang="less" scoped>
.result {
    width: 100%;
    height: 100%;
}
.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("../../assets/images/bg2.jpg") no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;

    h1 {
        font-size: zpx;
        font-weight: 400;
        color: #ecb419;
    }
    p {
        font-size: 52px;
        color: #fff;
        margin-top: 80px;
    }
    button {
        width: 200px;
        outline: none;
        border: 1px solid #fff;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
        margin-top: 60px;
        font-size: 32px;
        text-shadow: none;
        text-align: center;
        line-height: 60px;
        padding: 10px;
    }
}
</style>