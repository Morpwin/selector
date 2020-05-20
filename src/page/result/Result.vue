<template>
    <div class="result" ref="result">
        <div class="loading" v-if="!loading"><img src="../../assets/images/loading.png" alt="" ></div>
        <div class="content" v-if="loading">
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
            loading: false
        }
    },
    computed: {
        ...mapGetters(["getEvents"])
    },
    mounted() {
        this.length = this.$store.state.events.length;
        this.reset();
        let result = this.$refs.result;
        let img = new Image();
        img.src = require("../../assets/images/bg2.jpg")
        img.onload = () => {
            this.loading = true
            result.style.background = 'url('+ img.src +') no-repeat 0 0 / 100% 100% fixed'
        }
    },
    methods: {
        reset() {
            
            let id = Math.floor(Math.random() * this.length + 1);
            if (this.id === id) {
                this.reset();
            } else {
                this.id = id;
            }
            console.log(this.loading)
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

    h1 {
        font-size: 3.2rem;
        font-weight: 400;
        color: #ecb419;
    }
    p {
        font-size: 2.6rem;
        color: #fff;
        margin-top: 4rem;
    }
    button {
        width: 10rem;
        outline: none;
        border: 1px solid #fff;
        border-radius: .4rem;
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
        margin-top: 3rem;
        font-size: 1.6rem;
        text-shadow: none;
        text-align: center;
        line-height: 3rem;
        padding: .5rem;
    }
}
</style>