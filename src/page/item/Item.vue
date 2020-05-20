<template>
    <div class="item" ref="item" >
        <div class="loading" v-if="!loading"><img src="../../assets/images/loading.png" alt=""></div>
        <router-view></router-view>
        <router-link to="/" tag="span" class="exit"></router-link>
        <transition-group tag="ul" v-if="loading">
            <li v-for="item of events" :key="item.id">
                <h1>标题: {{item.tip}}</h1>
                <p>内容: {{item.content}}</p>
                <span @click="deleteItem(item.id)" v-if="showDelete" class="icon"></span>
            </li>
        </transition-group>
        <button class="delete" @click="show()" v-if="loading">-</button>
        <router-link to="/item/addItem" tag="button" class="add" v-if="loading">+</router-link>
    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            events: this.$store.state.events,
            showDelete: false,
            loading: false
        };
    },
    created() {
        window.addEventListener("click", e => {
            if (
                e.target.className != "delete" &&
                e.target.className != "icon"
            ) {
                this.showDelete = false;
            }
        });
    },
    mounted() {
        let item = this.$refs.item
        let img = new Image();
        img.src = require("../../assets/images/bg3.jpg")
        img.onload = () => {
            this.loading = true
            item.classList.add("bg")
        }
    },
    methods: {
        deleteItem(id) {
            this.$store.dispatch("deleteItem", id);
        },
        show() {
            this.showDelete = true;
        }
    }
};
</script>

<style lang="less" scoped>
.bg::before {
    background: url("../../assets/images/bg3.jpg") no-repeat;
    background-size: 100% 100%;
}
.v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(50px);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s linear;
}
.v-enter-to,
.v-leave {
    opacity: 1;
}
.exit {
    width: 3.2rem;
    height: 3.2rem;
    background: url("../../assets/images/exit.png");
    background-size: 100% 100%;
    display: block;
    margin-left: 2rem;
    margin-top: 1rem;
}
.button {
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    position: fixed;
    border: 1px solid #eaeaea;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.52);
    color: rgba(0, 0, 0, 0.52);
    font-size: 2.4rem;
    outline: none;
}
.item::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.item {
    width: 100%;
    height: 100%;
    position: absolute;
    ul {
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
        li {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #000;
            background-color: rgba(255, 255, 255, 0.52);
            margin-top: 2rem;
            border-radius: .8rem;
            padding: 1rem;
            box-sizing: border-box;
            position: relative;
            font-size: 1.4rem;
            line-height: 2.4rem;
            h1 {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p {
                width: 100%;
                margin-top: .5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span {
                position: absolute;
                right: 1rem;
                width: 3.2rem;
                height: 3.2rem;
                background: url("../../assets/images/delete.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        li:first-child {
            margin-top: 0;
        }
    }
    .add {
        .button();
        bottom: 10%;
        right: 25%;
    }
    .delete {
        .button();
        bottom: 10%;
        left: 25%;
    }
}
</style>